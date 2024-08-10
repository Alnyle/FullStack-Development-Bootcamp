


function display(message) {
    const el = document.createElement('div');
    el.textContent = message;
    document.body.appendChild(el);
}

export { display };