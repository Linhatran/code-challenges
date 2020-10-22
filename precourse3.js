function reduce(array, callback, start) {
  let initialValue;
  if (!start) {
    initialValue = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      initialValue = callback(initialValue, array[i + 1]);
    }
  } else {
    initialValue = start;
    for (let i = 0; i < array.length; i++) {
      initialValue = callback(initialValue, array[i]);
    }
  }
  return initialValue;
}
