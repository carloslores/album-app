import React, {Component} from 'react';
import {connect} from "react-redux"
import AlbumDetails from "./AlbumDetails"
import {getOneAlbum} from "../actions"



class AlbumContainer extends Component {
    componentDidMount(){
        const { albumId } = this.props.match.params
        console.log(this.props.album.length !== 0 ? this.props.album : null)
        this.props.getOneAlbum(albumId)

    }
    getAlbum = albumId => {
       // console.log(this.props.album)
        return this.props.getAlbum(albumId)
    }

    render(){
       
        let matchId = this.props.album.album.filter(album=>album.albumId === +this.props.match.params.albumid)
   
        console.log(Array.isArray(matchId))
  
        return(
            <div className="col-sm-10 col-md-12 col-lg-12 album">
                <div className="row">
            
            {matchId.map(album=> <AlbumDetails key={album.id} album={album}/>
           )}
            </div>
            </div>
        )
    }



}


const mapStateToProps = state => {
    console.log(state)
    return {
        album: state.album
    }

}

const mapDispatchToProps = {
    getOneAlbum
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumContainer)