// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.

const randomYear = Math.floor(Math.random() * (1950 - 1930 + 1)) + 1930;

function saySomething() {
  return prompt("Say something to Grandma: ");
}; 

function talkingToGrandma() {
  const answer = saySomething();
  if (answer === "BYE") {
    alert("BYE");
  } else if (answer === answer.toUpperCase()) { 
    alert(`NO, NOT SINCE ${randomYear}`);
    talkingToGrandma();
  } else {
    alert("HUH?! SPEAK UP, SONNY!");
    talkingToGrandma();
  };
};

talkingToGrandma();