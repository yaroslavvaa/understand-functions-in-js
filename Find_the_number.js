const currentDate = () => new Date().toLocaleDateString('en-US');
const maxNumber = arr => Math.max(...arr);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));