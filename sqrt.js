const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;