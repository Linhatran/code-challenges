 * Returns a function that only invokes func once per every wait milliseconds
 * (additional calls to func within the wait should not be invoked or queued).
 */
function throttle(func, wait) {
  //start last call at 0
  let lastCalled = 0;
  return function (...args) {
    //get the time at this moment code is running
    const now = Date.now();
    //compare if the wait time has passed, if true, call func again
    if (now - lastCalled >= wait) {
      lastCalled = now;
      return func(...args);
    }
  };
}
