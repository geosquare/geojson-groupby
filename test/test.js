var expect = require('chai').expect;
var groupBy = require('../geojson-groupby.js')
  var dataSet = require('./test-data.js')

describe('geojson-groupby', function() {
  it('group features and merge geometries to multigeometries', function() {
    expect(groupBy(dataSet.data, ['properties.color']))
      .to.deep.equal(dataSet.groupedGeom)
  })
  it('group features, merge geometries to multigeometries and collect ids', 
    function() {
      expect(groupBy(dataSet.data, ['properties.color'], ['id']))
        .to.deep.equal(dataSet.groupedIdGeom)
    })
})
