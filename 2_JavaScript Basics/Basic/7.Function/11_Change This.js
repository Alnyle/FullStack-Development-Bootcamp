

const video = {
    title: 'z',
    tags: ['a', 'b', 'c'],
    playTags() {
        this.tags.forEach(element => {
            console.log(this.title,element);
        });
    }
}

video.playTags()


function playVideo(a, b) {
    console.log(this);
}


playVideo.call({ name: 'Mosh'}, 1, 2) // call : use to reference to object in function  when send object => we can pass arguments 1 by 1
playVideo.apply({ name: 'Mosh'}, [1,2]) // call : use to reference to object in function => while in apply we pass them as array
playVideo.bind({ name: 'Mosh'}) () // does call our playVideo function instead it's return a new function and sets this to point this object permanently
const fn = playVideo.bind({ name: 'Mosh'})

fn()

