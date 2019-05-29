import React, { Component } from 'react';
import {connect} from "react-redux"
import {allAlbums} from "../actions"
import AlbumCards from "../components/AlbumCards"

class Albums extends Component{

    componentWillMount(){
        this.props.allAlbums()
    }
    renderAlbums(){
        if(this.props.albums.length !== 0)
        return this.props.albums.albums.map(album=><AlbumCards key={album.id} {...album}/>)
    }


    render(){
        return(
            <main className="album">
           
                 <div className="col-sm-10 col-md-12 col-lg-12">
                <div className="row">
                 {this.renderAlbums()}
                 </div>
              </div>
             </main>
        )

    }
}

function mapSateToProps(state){
    return{
        albums: state.albums
    }
}

export default connect(mapSateToProps, {allAlbums})(Albums)