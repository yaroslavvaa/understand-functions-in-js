const merge = [...new Set([...a, ...b])];
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());