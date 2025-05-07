// Make a promise that waits 2 seconds using setTimeout, then resolves with "Timer done" and logs it using .then().

let timerPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Timer Done");
  }, 2000);
});

timerPromise.then(function (result) {
  console.log(result);
});