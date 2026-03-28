import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);


// format(): convert an object to String
console.log(url.format(urlObj));

// import.meta.url: file URL
console.log(import.meta.url);


// fileURLToPath(): convert url to regular path
console.log(url.fileURLToPath(import.meta.url));


console.log(urlObj.searchParams);
const params = new URLSearchParams(urlObj.search);
params.append('limit', 5)
params.delete('limit')
console.log(params.get('q'));