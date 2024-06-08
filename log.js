const merge = [...new Set([...a, ...b])];
const isTabInView = () => !document.hidden;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';