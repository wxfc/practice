// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(people) {
    let till = []
    let countTwentyFive = 0
    for (let i=0; i<people.length; i++) {
        if (people[i] === 25) {
            till.push(people[i])
            countTwentyFive++
        } else if (people[i] === 50 && till.includes(25)) {
            till.push(people[i])
            till.splice(till.indexOf(25),1)
            countTwentyFive--
        } else if (people[i] === 100 && till.includes(25) && till.includes(50)) {
            till.push(people[i])
            till.splice(till.indexOf(25),1)
            till.splice(till.indexOf(50),1)
            countTwentyFive--
        } else if (people[i] === 100 && countTwentyFive >= 3) {
            till.push(people[i])
            till.splice(till.indexOf(25),3)
            countTwentyFive -= 3
        } else {
            return 'NO'
        }
    }
    return 'YES'
}

console.log(tickets([25,25,50]))
console.log(tickets([25,25,25,100,25,25,25,100,25,25,50,100,25,100,25]))

