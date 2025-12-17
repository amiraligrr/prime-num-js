const final = 20   // enter your final number









const numbers = []

for (let i = 2; i < final; i++) {
    let isPrime = true
    
 
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false
            break 
        }
    }
    
    if (isPrime) {
        numbers.push(i)
    }
}

console.log(numbers) 