(function () {
  // Code goes in here
  let facingForward = true;
  let position = 0;

  function move(distance) {
    if (facingForward) {
      position += distance;
    } else {
      position -= distance;
    }
  }

  function moveForward(distance) {
    // increase position by distance
    move(distance);
  }

  /**
   * @todo How can I make this more DRY?
   * Hint: this seems very similar to moveForward()
   */
  function moveBackward(distance) {
    // decrease position by distance
    move(distance * -1);
  }

  function turnAround() {
    // switch value of facingForward
    facingForward = !facingForward;
  }

  function printLocation() {
    console.log(`User is located at ${position}`);
  }

  moveForward(5);
  moveBackward(3);
  printLocation(); // 2
  turnAround();
  moveForward(10);
  moveBackward(5);
  printLocation(); // … should print -3
})();
