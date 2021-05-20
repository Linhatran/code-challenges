const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
}).then(() => {});
setTimeout(() => {
  promise.then(() => {});
}, 2000);
class CustomPromise {
  constructor(executor) {
    this.state = 'pending';
    this.callback = () => {};
    executor(this.resolve);
  }
  resolve() {
    this.state = 'success';
    this.callback();
  }
  then(cb) {
    this.callback = cb;
    if (this.state === 'success') this.callback();
  }
}
const customPromise = new CustomPromise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
