const commentUI = `<div class="addComment">
    <h2>Add a comment</h2>
    <label>Your Comment: <input type="text" id="commentInput"></label>
    <button id="commentSubmit">Add Comment</button>
    </div>
    <h2>Comments</h2>
    <ul class="comments"></ul>` ;

function renderCommentList( element, comments ) {
    element.innerHTML = "" ;
    comments.forEach( comment => {
        let item = document.createElement( "li" ) ;
        item.innerHTML = `${comment.name}: ${comment.content}` ;
        element.appendChild( item ) ;
    } ) ;
} ;

export { commentUI, renderCommentList } ;