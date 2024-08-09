const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const merge = (a, b) => [...a, ...b];