
function next() {
  console.log("Nexting");
} function next() {
  console.log("Nexting");
}

function blackThenWhite() {
  console.log('white');
  sequence = "white";

  setTimeout(() => {
    // sequence = "zeroAlphaWhite";
    sequence = "black";
  }, 3000);
}

function sequenceTwo(duration) {

  console.log('sequence two');


  repeater(addConstellations, 3000, 5, duration);
  repeater(blackThenWhite, 9000, 10, duration);
  setTimeout(() => {
    // sequence = "zeroAlphaWhite";
    console.log('setting');
    sequence = "black";
    bgc.a = 0;
  }, duration);

}