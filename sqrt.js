const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;