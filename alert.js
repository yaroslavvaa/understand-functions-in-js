const timeFromDate = date => date.toTimeString().slice(0, 8);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());