export class Comment {
    constructor(name, content, type, date = new Date()) {
        this.name = name;
        this.date = date;
        this.content = content;
        this.type = type;
    }

    static renderComment(comment, parent) {
        let newElem = document.createElement('li');
        newElem.innerHTML = `
            <div class="commentContainer">
                <div>
                    <h3>${ comment.name }</h3>
                    <p>${ comment.content }</p>
                </div>
                <p>${ comment.date }</p>
            </div>
        `
        parent.appendChild(newElem);
    }

}

export class Comments {
    constructor(comments) {
        this.comments = comments;
    }

    getAllComments() {
        return this.comments;
    }

    renderComments(comments) {
        let parentUL = document.getElementById('commentUL');
        parentUL.innerHTML = '';
        comments.forEach(comment => {
            // TODO
            //if(parentUL ==)
            Comment.renderComment(comment, parentUL);
        });
    }

    filterCommentsByName(name) {
        if (name === 'All')
            return this.comments;
        else 
            return this.comments.filter((comment) => {
                return comment.name === name;
            });
    }

    addComment(name, content, type) {
        let newComment = new Comment(name, content, type)
        this.comments.unshift(newComment);
    }
}