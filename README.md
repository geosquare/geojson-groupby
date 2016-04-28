# geojson-groupby
Group GeoJSON features or FeatureCollection based on associated properties and merge geometries to multigeometries.
## installation

```
npm install geojson-groupby
```

## usage
```javascript
var geoGroupBy = require('geojson-groupby')
var group = geoGroupBy(array, properties [, collect])
```
* **array**  Array of JSON objects
* **properties**  Array JSON properties' path like `address.city` or lookup object

  **lookup**
  ```
  {
    intervals: array of numbers
    ,property: string
    [,labels: array of string]
  }
  ``` 
  **intervals** Array of intervals. Like [ 10, 20, 30, 40, 50] group the data in four ranges, whereas lower bound is inclusive and upper bound is exclusive.

  **peroperty** Property path like `price`

  **labels** Array of interval labels like [ 'low', 'medium', 'high']

* **collect** Array of properties that need to be collected in array 


### examples

##### data set
````javascript
var features = [
  {
    "id": 1, "geometry": {"type": "Point", "coordinates": [10, 10]},
    "properties": {"color": "blue","price": 150,"address": {"city": "New York"}}
  }, {
    "id": 2, "geometry": {"type": "Point", "coordinates": [20, 20]},
    "properties": {"color": "green","price": 200,"address": {"city": "London"}}
  }, {
    "id": 3, "geometry": {"type": "Point", "coordinates": [30, 30]},
    "properties": {"color": "red","price": 210,"address": {"city": "London"}}
  }, {
    "id": 4, "geometry": {"type": "Point", "coordinates": [40, 40]},
    "properties": {"color": "red","price": 280,"address": {"city": "New York"}}
  }, {
    "id": 5, "geometry": {"type": "Point", "coordinates": [50, 50]},
    "properties": {"color": "green","price": 300,"address": {"city": "New York"}}
  }, {
    "id": 6, "geometry": {"type": "Point", "coordinates": [60, 60]},
    "properties": {"color": "red","price": 360,"address": {"city": "Mumbai"}}
  }
]
```

##### group features and merge geometries to multigeometries
```javascript
geoGroupBy(features, ['properties.color'])
// output as
{blue: {geometry: {type: 'MultiPoint', coordinates: [[10, 10]]}},
  green: {geometry: {type: 'MultiPoint', coordinates: [[20, 20], [50, 50]]}},
  red:
   {geometry:
      {type: 'MultiPoint',
        coordinates: [[30, 30], [40, 40], [60, 60]]}}}
```
##### group features, merge geometries to multigeometries and collect ids
```javascript
geoGroupBy(features, ['properties.color'],['id'])
// output as
{blue:
   {id: [1],
     geometry: {type: 'MultiPoint', coordinates: [[10, 10]]}},
  green:
   {id: [2, 5],
     geometry: {type: 'MultiPoint', coordinates: [[20, 20], [50, 50]]}},
  red:
   {id: [3, 4, 6],
     geometry:
      {type: 'MultiPoint',
        coordinates: [[30, 30], [40, 40], [60, 60]]}}}

```

This package `geojson-groupby` is based on [json-groupby](https://github.com/gagan-bansal/json-groupby), so please also check different [examples](https://github.com/gagan-bansal/json-groupby#examples) on usage of json-groupby
  
## developing
Once you run
 
```npm isntall```

then for running test 

```npm run test```

to create build

```npm run build```

## license
This project is licensed under the terms of the MIT license.
