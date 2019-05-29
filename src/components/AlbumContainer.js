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
        // let copy = this.props.album.album
        // let half = Math.ceil(copy.length / 60)
        // let part = copy.splice(0, half)
        let matchId = this.props.album.album.filter(album=>album.albumId === Number(this.props.match.params.albumid))
        // console.log(this.props.album.album[0])
        // console.log(this.props.album.album.filter(album=>album.albumId === Number(this.props.match.params.albumid)))
        // console.log(typeof this.props.match.params.albumid)
        console.log(Array.isArray(matchId))
       // console.log(this.props.album.album.map(al=>console.log(al)))
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