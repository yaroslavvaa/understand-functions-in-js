const removeDuplicates = (arr) => [...new Set(arr)];
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const arrayContains = (arr, element) => arr.includes(element);
const allResults = await Promise.all(items.map(async (item) => {}));
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const reversedString = str => str.split('').reverse().join('');