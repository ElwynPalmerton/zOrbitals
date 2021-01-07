

function testSequence() {

  let testScore = [
    {
      function: () => console.log("Test One in test sequence"),
      time: 1000,
    },
    {
      function: () => console.log("Test Two in test Sequence"),
      time: 1000,
    },
  ];



  sequencer(testScore);

}