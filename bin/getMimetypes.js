#!/usr/bin/env node
"use strict";

/**
 * Fetch Apache mime.types
 *
 * Usage:
 *   $ bin/getMimetypes.js
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */

//--------------------------------------
// Constant
//--------------------------------------
// Apache
const TARGET = 'https://raw.githubusercontent.com/apache/httpd/trunk/docs/conf/mime.types';

// Additional Definition List
const ADDLIST = './data/addlist.json'

// Save file
const SAVE_FILE = './data/mimetypes.json';
const SAVE_FILE_PRETTY = './data/mimetypes.pretty.json';

//--------------------------------------
// Module
//--------------------------------------
const fetch = require('node-fetch');
const fs = require('fs');

//--------------------------------------
// Execute
//--------------------------------------
!(async ()=>{
  try{
    const res = await fetch(TARGET);
    const text = await res.text();
    const mimeTypes = {
      '.date': Date.now(),
      '.url': TARGET,
    };

    // Parse data
    text.split('\n').forEach(line=>{
      if(line.match(/^\s*#/))
        return;
      const [ext, ...types] = line.split(/\s+/);
      types.map(type=>{
        mimeTypes[type] = ext;
      });
    });

    // Additional Definition List
    const addlist = JSON.parse(fs.readFileSync(ADDLIST));
    Object.keys(addlist).forEach(key=>{
      mimeTypes[key] = addlist[key];
    });

    // Save file
    fs.writeFileSync(SAVE_FILE_PRETTY, JSON.stringify(mimeTypes, null, 2));  // human friendly
    fs.writeFileSync(SAVE_FILE, JSON.stringify(mimeTypes));
  }
  catch(e){
    console.error(e);
  }
})();