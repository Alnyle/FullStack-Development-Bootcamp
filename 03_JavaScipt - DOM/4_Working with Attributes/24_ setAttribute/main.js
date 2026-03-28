

let btnSend = document.getElementById('btnSend');
// if statement that checks whether the variable btnSend is truthy. In JavaScript, if 
if (btnSend) {
    btnSend.setAttribute('name', 'send');
    // to disable the button (true as default value)
    btnSend.setAttribute('disabled', '');
    
    //  To set the value of a Boolean attribute to false,
    //  you need to remove the entire attribute using the removeAttribute() method.
    btnSend.removeAttribute('disabled');
}