
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

function extend(Child, Parent) {
    Child.prototype = new Parent;
    Child.prototype.constructor = Child;
}

function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    };
} 

HtmlElement.prototype.focus = function() {
    console.log('focus');
}

function HtmlSelectElement(items = []) {
    this.items = items; 
    this.addItem = function(item) {
        this.items.push(item);
    }  
    this.remove = function(item) {
        this.items.splice(this.items.indexOf(item),1);
    }
}

extend(HtmlSelectElement, HtmlElement);

const hs = new HtmlSelectElement();
const h = new HtmlElement();
console.log(hs.click())
