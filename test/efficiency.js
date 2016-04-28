var groupBy = require('../')
  createTestData = require('./create-test-data.js');
console.log('Creating random features.....'); 
createTestData(100000, function(data) {
  console.log('created random 100,000 features');
  var features = data.features;
  
  console.time('group features and merge geometries to multigeometries') 
  groupBy(features, ['properties.address.city']);
  console.timeEnd('group features and merge geometries to multigeometries') 
  
  console.time(
    'group features, merge geometries to multigeometries and collect ids') 
  groupBy(features, [{
    property: 'properties.price', 
    intervals: [10000, 30000, 70000, 10000]
  }],['id'])
  console.timeEnd(
    'group features, merge geometries to multigeometries and collect ids') 
});
