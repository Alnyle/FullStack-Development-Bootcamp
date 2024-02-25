


let post = new Post('a','b','c');

console.log(post)

function Post(title,body,author,comment,isLive) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.view = 0;
    this.comment = [];
    this.isLive = false;
}


