const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log( "A" - "B" + 2);
const merge = [...new Set(a.concat(b))];