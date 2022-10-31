import CommentModel from "./commentModel.js" ;
import { commentUI, renderCommentList } from "./commentsView.js" ;

export default class Comments {
    constructor( type, commentElementId ) {
        this.type = type ;
        this.commentElementId = commentElementId ;
        this.model = new CommentModel( this.type ) ;
    } ;
    addSubmitListener( postName ) {
        document.getElementById( "commentSubmit" ).onclick = () => {
            const comment = document.getElementById( "commentInput" ).value ;
            this.model.addComment( postName, comment ) ;
            document.getElementById( "commentInput" ).value = "" ;
            this.showCommentList( postName ) ;
        } ;
    } ;
    showCommentList( query = null ) {
        try {
            const parent = document.getElementById( this.commentElementId ) ;
            if ( ! parent ) throw new Error( "Comment parent not found!" ) ;
            if ( parent.innerHTML === "" ) {
                parent.innerHTML = commentUI ;
            } ;
            if ( query !== null ) {
                document.querySelector( ".addComment" ).style.display = "block" ;
                this.addSubmitListener( query ) ;
            } else {
                // Stretch Goal 2.
                document.querySelector( ".addComment" ).style.display = "none" ;
            } ;
            let comments = this.model.getComments( query ) ;
            if ( comments === null ) {
                comments = [] ;
            } ;
            renderCommentList( parent.lastChild, comments ) ;
        } catch ( error ) {
            console.log( error ) ;
        } ;
    } ;
} ;