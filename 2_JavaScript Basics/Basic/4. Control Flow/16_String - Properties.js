const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(s) {
    for (let property in s) {
        if (typeof s[property] === 'string') {
            console.log(property, s[property]);
        }
    }
}
