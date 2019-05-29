import React, {Component} from 'react';
import {connect} from "react-redux"
import AlbumDetails from "./AlbumDetails"
import {getOneAlbum} from "../actions"

class AlbumContainer extends Component {
    componentDidMount(){
        const { albumId } = this.props.match.params
        console.log(this.props)
        this.props.getOneAlbum(albumId)

    }
    getAlbum = albumId => {
        this.props.getAlbum(albumId)
    }

    render(){
        return(
            <AlbumDetails/>
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