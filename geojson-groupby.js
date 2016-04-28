'use strict';
var groupBy = require('json-groupby')
var multi = require('multigeojson')

function geoGroupBy(features, properties,collect) {
  var arr = Array.isArray(features) ? features : features.features
  var collect = collect || []
  if (collect.indexOf('geometry') < 0) collect.push('geometry')
  var group = groupBy(arr, properties, collect)
  return toMultiGeometry(group, {}) 
}

function toMultiGeometry(group, merged) {
  for (var key in group) {
    if (group[key].geometry) {
      merged[key] = group[key]
      merged[key].geometry = multi.implode(group[key].geometry);
    } else {
      merged[key] = toMultiGeometry(group[key],{})
    }
  }
  return merged;
}

module.exports = geoGroupBy;
