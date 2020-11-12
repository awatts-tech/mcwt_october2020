// Declare a variable named submissions that is initialized to an array with the following
// objects:
const submissions = [
  {
    name: "BJ",
    // ...
  },
];

// Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate

function addSubmission(array, newName, newScore, newDate) {
  // ○ Functionality: construct an object and push it into the array. The object must
  // have the same properties as the objects already in the array. Use conditional
  // statements to set the value for the passed property to true if the score is
  // greater than or equal to 60 and false otherwise.s
}

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.
// [5,2,3,4]

function getLowestScore(submissions) {
  let lowest = null;

  submissions.forEach(function (submission) {
    if (lowest === null || lowest.score > submission.score) {
      lowest = submission;
    }
  });

  return lowest;
}
