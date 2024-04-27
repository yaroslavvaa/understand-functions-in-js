var arr3 = "jones".split('');
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
console.log(false == '0');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));