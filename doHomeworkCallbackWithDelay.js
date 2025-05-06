// Write a function called doHomework(subject, callback) that logs
// "Starting my [subject] homework" and then calls a callback function that says "Finished homework!"
// adding a delay using setTimeout to simulate homework taking time

function doHomework(subject, callback) {
  console.log("Starting my " + subject + " Homework");
  setTimeout(function () {
    callback();
  }, 2000);
}

function finished() {
  console.log("Finished Homework !");
}

doHomework("Math", finished);