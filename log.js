console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';