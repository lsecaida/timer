const readline = require("readline");
const process = require("process");

// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to play a beep sound
function playBeep() {
  process.stdout.write("\x07"); // Produces a beep sound
}

// Function to set an alarm
function setAlarm(seconds) {
  setTimeout(() => {
    console.log(`Alarm after ${seconds} seconds`);
    playBeep();
  }, seconds * 1000);
}

// Read command-line arguments
const args = process.argv.slice(2);

// Process command-line arguments and set alarms
args.forEach((arg) => {
  const seconds = parseInt(arg);
  if (!isNaN(seconds)) {
    setAlarm(seconds);
  } else {
    console.log(
      `Invalid argument: ${arg}. Please provide a valid number of seconds.`
    );
  }
});

// Close the readline interface on user input
rl.question("Press Enter to exit...", () => {
  rl.close();
});
