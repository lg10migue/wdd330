import { readFromLS, writeToLS } from "./ls.js" ;

export default class CommentModel {
    constructor( type ) {
        this.type = type ;
        this.comments = readFromLS( this.type ) || [] ;
    } ;
    // Stretch Goal 1.
    getComments( query = null ) {
        if ( query === null ) {
            return this.comments ;
        } else {
            return this.comments.filter( comment => comment.name === query ) ;
        } ;
    } ;
    addComment( hikeName, comment ) {
        const newComment = {
            // Stretch Goal 3.
            name: hikeName,
            date: new Date(),
            content: comment
        } ;
        this.comments.push( newComment ) ;
        writeToLS( this.type, this.comments ) ;
    } ;
} ;