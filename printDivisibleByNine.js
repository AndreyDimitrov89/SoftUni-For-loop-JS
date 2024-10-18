function printDivisibleByNine(start, end) {
    let sum = 0; 
    let divisibleNumbers = []; 

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) { 
            sum += i; 
            divisibleNumbers.push(i); 
        }
    }
    console.log(`The sum: ${sum}`);
    for (const number of divisibleNumbers) {
        console.log(number); 
    }
}


printDivisibleByNine(100, 200);