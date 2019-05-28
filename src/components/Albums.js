import React, { Component } from 'react';
import {connect} from "react-redux"
import {allAlbums} from "../actions"

class Albums extends Component{

    componentWillMount(){
        this.props.allAlbums()
    }
    renderAlbums(){
        if(this.props.albums.length !== 0)
        return this.props.albums.albums.map(album=><h1>{album.title}</h1>)
    }


    render(){
        return(
             <div>
                 {this.renderAlbums()}
             </div>
        )

    }
}

function mapSateToProps(state){
    return{
        albums: state.albums
    }
}

export default connect(mapSateToProps, {allAlbums})(Albums)