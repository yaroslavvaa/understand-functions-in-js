const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const fullName = name || 'buddy';
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));