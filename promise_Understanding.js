// What is Promises and what is .then() and .catch()

let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Everything is working");
  } else {
    reject("Something is wrong");
  }
});

myPromise
  .then(function (result) {
    console.log(result); // "Everything worked!"
  })
  .catch(function (error) {
    console.log(error);
  });