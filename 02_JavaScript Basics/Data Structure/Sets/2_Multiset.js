const MultiSet = require('multiset');
const x = new MultiSet();

x.add(1);
x.add(2);
x.add(1);

console.log(x.get(1)); // Outputs: 2 (count of 1)


// another way to use multiset

const { Bag } = require('collections');

const multiset = new Bag();

multiset.add(1);
multiset.add(2);
multiset.add(1);

console.log(multiset.count(1)); // Outputs: 2 (count of 1)
