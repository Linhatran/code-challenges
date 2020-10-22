// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return element % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  if (!Array.isArray(collection)) {
    const result = {};
    for (let key in collection) {
      if (!callback(collection[key], key, collection)) {
        result[key] = collection[key];
      }
    }
    return result;
  } else {
    const result = [];
    for (let value of collection) {
      if (!callback(value)) result.push(value);
    }
    return result;
  }
}
