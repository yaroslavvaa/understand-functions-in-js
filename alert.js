const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isArray = (arr) => Array.isArray(arr);