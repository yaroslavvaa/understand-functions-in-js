const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const buildOutputPath = path.join(repositoryRootPath, 'out');
console.log("0 || 1 = "+(0 || 1));