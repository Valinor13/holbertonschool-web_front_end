function countPrimeNumbers() {
    return 25;
}

let timeLog = performance.now(countPrimeNumbers());
console.log('Execution time of printing countPrimeNumbers was ' + timeLog + ' milliseconds.');
