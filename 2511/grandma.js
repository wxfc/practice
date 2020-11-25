// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.

const randomYear = []

function saySomething() {
  prompt("Say something to Grandma: ");
}; 

function talkingToGrandma() {
  saySomething();
  if (saySomething === saySomething.toUpperCase) {
    return alert("NO, NOT SINCE 1938");
  } else {
    alert("HUH?! SPEAK UP, SONNY!");
  };
    return talkingToGrandma();   
};

talkingToGrandma();