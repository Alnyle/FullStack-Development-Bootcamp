

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

