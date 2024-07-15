const repositoryRootPath = path.resolve(__dirname, '..');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));