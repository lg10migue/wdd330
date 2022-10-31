import HikeModel from "./hikeModel.js" ;
import HikesView from "./hikesView.js" ;
import Comments from "./commentsController.js" ;

export default class HikesController {
    constructor( parentId ) {
        this.parentElement = document.getElementById( parentId ) ;
        this.hikeModel = new HikeModel() ;
        this.hikesView = new HikesView() ;
        this.comments = new Comments( parentId, "comments" ) ;
    } ;
    showHikeList() {
        const hikeList = this.hikeModel.getAllHikes() ;
        this.hikesView.renderHikeList( this.parentElement, hikeList ) ;
        this.addHikeListener() ;
        this.comments.showCommentList() ;
    } ;
    showOneHike( hikeName ) {
        const hike = this.hikeModel.getHikeByName( hikeName ) ;
        this.hikesView.renderOneHikeFull( this.parentElement, hike ).onclick = () => {
            this.showHikeList() ;
        } ;
        this.comments.showCommentList( hikeName ) ;
    } ;
    addHikeListener() {
        const childrenArray = Array.from( this.parentElement.children ) ;
        childrenArray.forEach( child => {
            child.addEventListener( "click", e => {
                this.showOneHike( e.currentTarget.dataset.name ) ;
            } ) ;
        } ) ;
    } ;
} ;