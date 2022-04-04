'use strict';

/**
 * Return mimetype from filename extension
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */

//--------------------------------------
// Constant
//--------------------------------------
const APPEND_EXT = {}

//--------------------------------------
// Module
//--------------------------------------
const path = require('path');
const mimetypes = require('./data/mimetypes.json');

/**
 * Get MimeType
 *
 * @param {string} filename
 * @param {string} [defaultType='application/octet-stream']
 * @returns {string}
 */
function get(filename, defaultType='application/octet-stream') {
  const basename = path.basename(filename);
  const ext = path.extname(basename).replace('.', '');
  return  APPEND_EXT[ext] ||  mimetypes[ext] || defaultType;
}

/**
 * Set MimeType
 *
 * @param {any} target {ext:'txt', type:'text/plain'} or [{ext:'txt', type:'text/plain'}, ...]
 * @returns {void}
 */
function set(target){
  const list = Array.isArray(target)? target : [target];
  list.forEach(item=>{
    APPEND_EXT[item.ext] = item.type;
  });
}

/**
 * Remove MimeType
 *
 * @param {any} target 'txt' or ['txt', 'html', ...]
 * @returns {void}
 */
function remove(target){
  const list = Array.isArray(target)? target : [target];
  list.forEach(key=>{
    if(key in APPEND_EXT){
      delete APPEND_EXT[key];
    }
    if(key in mimetypes){
      delete mimetypes[key];
    }
  });
}

/**
 * Get MimeType List
 *
 * @returns {object}
 */
function listAll(){
  return {
    mimetypes,
    APPEND_EXT,
  };
}

//---------------------------------------------
// exports
//---------------------------------------------
module.exports = {
  get,
  set,
  remove,
  listAll
}