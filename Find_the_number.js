const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const copyToClipboard = (text) => navigator.clipboard.writeText(text);