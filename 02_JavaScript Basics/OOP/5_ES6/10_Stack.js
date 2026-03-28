
const _items = new WeakMap();
class stack {
     constructor() {
        _items.set(this, []);
     }
    pop() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty');
        return items.pop();
    }

    push(value) {
        _items.get(this).push(value);
    }
    
    get top() {
        const items = _items.get(this);
        if (items.length === 0) console.log('stack is Empty');
        return items[items.length-1];
    }

    get count() {
        return _items.get(this).length;
    }
}

const s = new stack();
s.push(1);
s.push(2);
s.push(3);

console.log(s.top);