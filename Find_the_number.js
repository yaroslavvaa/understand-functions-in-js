console.log(false === '0');
var pattern = {};
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));