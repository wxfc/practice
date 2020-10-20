// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

function towerBuilder(floors) {
    let towerArr = []
    
    for (let i=1; i<=floors; i++) {
        towerArr.push(('*'.padEnd(floors, ' ')))
    }
    return towerArr
}

console.log(towerBuilder(3))

