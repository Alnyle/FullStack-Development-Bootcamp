

function alertMe(message) {
    alert(message);
}


document.addEventListener('mouseover', () => {
    let todayData = new Date();
    message = `${todayData} well done`;
    alertMe(message);
})