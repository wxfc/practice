// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// function pointsPer48(ppg, mpg) {
//   const ppgPer48 = (48/mpg)*ppg;
//   if (ppg === 0) {
//     return 0
//   } else {
//     return Math.round(ppgPer48 * 10) / 10
//   }
// };

let pointsPer48 = (ppg, mpg) => ppg === 0 || mpg === 0 ? 0 : Math.round(480 * ppg/mpg) / 10

console.log(pointsPer48(12, 20));
console.log(pointsPer48(10, 10));
console.log(pointsPer48(5, 17));
console.log(pointsPer48(0, 0));
console.log(pointsPer48(30.8, 34.7));
console.log(pointsPer48(22.9, 33.8));



