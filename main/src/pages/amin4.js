const x = require("readline");

const y = x.createInterface({
    input: process.stdin,
    output: process.stdout
});

y.question("What is your name ", (input) => {
  console.log(`Oh, so your name is ${input}`);
  console.log("Closing the interface");
  y.close();
});