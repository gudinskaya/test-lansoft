var isEqual = require('lodash.isequal');

const arr = [ {
    name: "John",
    age: 30
}, {
    name: "John",
    age: 30
}, 1, 2, 3 ]

const res = arr.reduce((acc, curr) => (acc.some((v) => isEqual(v, curr))) ? acc : [ ...acc, curr ], [])
console.log(res)