// Write a function called doHomework(subject, callback) that logs
// "Starting my [subject] homework" and then calls a callback function that says "Finished homework!"

function doHomework(subject, callback) {
  console.log("Starting my " + subject + " Homework");
  callback();
}

function finished() {
  console.log("Finished Homework !");
}

doHomework("Math", finished);