// using the while loop
// Print out all the leap years in the last 100 years.
// For numbers between 100 and 200 print out multiples of 7.


function leapYearsAndMultiplesOfSeven() {
    var i = 1820
    while (i <= 2020) {
        if (i >= 1920 && i % 4 === 0) {
            console.log(`${i} is a leap year`)
        } else if (i < 1920 && i % 7 === 0) {
            console.log(`${i} is a multiple of 7`)
        }
        i++
    }
}

leapYearsAndMultiplesOfSeven()

// Air Conditioning
// Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
// If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

function airConditioner() {
    let currentTemp = prompt('what is the current temperature?')
    let functionalAC = prompt('is the A/C functional?')
    let desiredTemp = prompt('what temperature do you desire?')
    if (functionalAC === 'yes' && currentTemp > desiredTemp) {
        alert('turn on the A/C please')
    } else if (functionalAC === 'no' && currentTemp > desiredTemp) {
        alert('fix the A/C now! its hot!')
    } else if (functionalAC === 'no' && currentTemp < desiredTemp) {
        alert('fix the A/C whenever you have the chance...its cool...')
    } else {
        alert('i didnt get that')
        airConditioner()
    }
}

airConditioner()