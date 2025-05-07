// Create two promises that resolve after different times.
// Use Promise.all() to wait for both, then log the result.

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First Promise (2 seconds)");
  }, 2000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second Promise (1 second)");
  }, 1000);
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All promises resolved:");
    console.log(results);
  });