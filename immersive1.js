function cloneDeep(composite) {
    const copy = new composite.constructor();
    for (let key in copy) {
      if (typeof composite[key] === 'object') {
        copy[key] = cloneDeep(composite[key])
      } else {
        copy[key] = composite[key];
      }
    }
    return copy
}
