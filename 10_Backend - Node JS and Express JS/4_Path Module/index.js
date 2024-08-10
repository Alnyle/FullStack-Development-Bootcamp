import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename(): take file path => return file name
console.log(path.basename(filePath));


// dirname()
console.log(path.dirname(filePath));

// extname(): take file path => return file extension 
console.log(path.extname(filePath));


// parse() => return all previous information
console.log(path.parse(filePath));


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

console.log(__dirname, __filename);


// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);


