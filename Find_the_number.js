const repositoryRootPath = path.resolve(__dirname, '..');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const merge = (a, b) => a.concat(b);