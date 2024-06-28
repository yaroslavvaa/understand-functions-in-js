const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const apmRootPath = path.join(repositoryRootPath, 'apm');
const appName = getAppName(channel);