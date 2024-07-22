const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const apmRootPath = path.join(repositoryRootPath, 'apm');
const isTabInView = () => !document.hidden;