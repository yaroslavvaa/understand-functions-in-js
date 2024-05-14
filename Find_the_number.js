const timeFromDate = date => date.toTimeString().slice(0, 8);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];