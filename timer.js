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
