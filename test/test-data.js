
var data =
{
  "type": "FeatureCollection",
  "features": [
    {
      "id": 1,
      "geometry": {
        "type": "Point",
        "coordinates": [
          166.90519,
          -73.13671
        ]
      },
      "properties": {
        "color": "blue",
        "price": 89221,
        "gender": "Male",
        "available": true,
        "address": {
          "street": "59 Arzu Manor",
          "areaCode": "(479)",
          "city": "New York"
        }
      }
    },
    {
      "id": 2,
      "geometry": {
        "type": "Point",
        "coordinates": [
          -31.89991,
          47.17422
        ]
      },
      "properties": {
        "color": "green",
        "price": 52593,
        "gender": "Female",
        "available": true,
        "address": {
          "street": "1014 Birud Lane",
          "areaCode": "(703)",
          "city": "London"
        }
      }
    },
    {
      "id": 3,
      "geometry": {
        "type": "Point",
        "coordinates": [
          -160.72406,
          -61.61034
        ]
      },
      "properties": {
        "color": "red",
        "price": 12205,
        "gender": "Female",
        "available": false,
        "address": {
          "street": "681 Kiok Ridge",
          "areaCode": "(308)",
          "city": "London"
        }
      }
    },
    {
      "id": 4,
      "geometry": {
        "type": "Point",
        "coordinates": [
          159.59218,
          73.51093
        ]
      },
      "properties": {
        "color": "red",
        "price": 26214,
        "gender": "Female",
        "available": true,
        "address": {
          "street": "8 Reje Boulevard",
          "areaCode": "(437)",
          "city": "New York"
        }
      }
    },
    {
      "id": 5,
      "geometry": {
        "type": "Point",
        "coordinates": [
          158.94625,
          -42.27802
        ]
      },
      "properties": {
        "color": "green",
        "price": 11085,
        "gender": "Female",
        "available": false,
        "address": {
          "street": "748 Siwabe Trail",
          "areaCode": "(375)",
          "city": "New York"
        }
      }
    },
    {
      "id": 6,
      "geometry": {
        "type": "Point",
        "coordinates": [
          -146.40599,
          -19.67443
        ]
      },
      "properties": {
        "color": "red",
        "price": 64813,
        "gender": "Female",
        "available": false,
        "address": {
          "street": "1172 Pawo Place",
          "areaCode": "(875)",
          "city": "Mumbai"
        }
      }
    },
    {
      "id": 7,
      "geometry": {
        "type": "Point",
        "coordinates": [
          102.06436,
          -8.91617
        ]
      },
      "properties": {
        "color": "yellow",
        "price": 92862,
        "gender": "Female",
        "available": true,
        "address": {
          "street": "465 Filpu Trail",
          "areaCode": "(610)",
          "city": "New York"
        }
      }
    },
    {
      "id": 8,
      "geometry": {
        "type": "Point",
        "coordinates": [
          47.23145,
          67.54184
        ]
      },
      "properties": {
        "color": "yellow",
        "price": 39281,
        "gender": "Male",
        "available": true,
        "address": {
          "street": "1746 Howmu Glen",
          "areaCode": "(818)",
          "city": "Mumbai"
        }
      }
    }
  ]
}
var groupedIdGeom = 
{ blue: 
   { id: [ 1 ],
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ 166.90519, -73.13671 ] ] } },
  green: 
   { id: [ 2, 5 ],
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ -31.89991, 47.17422 ], [ 158.94625, -42.27802 ] ] } },
  red: 
   { id: [ 3, 4, 6 ],
     geometry: 
      { type: 'MultiPoint',
        coordinates: 
         [ [ -160.72406, -61.61034 ],
           [ 159.59218, 73.51093 ],
           [ -146.40599, -19.67443 ] ] } },
  yellow: 
   { id: [ 7, 8 ],
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ 102.06436, -8.91617 ], [ 47.23145, 67.54184 ] ] } } }

var groupedGeom = 
{ blue: 
   {
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ 166.90519, -73.13671 ] ] } },
  green: 
   {
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ -31.89991, 47.17422 ], [ 158.94625, -42.27802 ] ] } },
  red: 
   {
     geometry: 
      { type: 'MultiPoint',
        coordinates: 
         [ [ -160.72406, -61.61034 ],
           [ 159.59218, 73.51093 ],
           [ -146.40599, -19.67443 ] ] } },
  yellow: 
   {
     geometry: 
      { type: 'MultiPoint',
        coordinates: [ [ 102.06436, -8.91617 ], [ 47.23145, 67.54184 ] ] } } }
module.exports = {
  data: data,
  groupedIdGeom: groupedIdGeom,
  groupedGeom: groupedGeom
}
