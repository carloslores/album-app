import React, {Component} from 'react';
import {connect} from "react-redux"
import AlbumDetails from "./AlbumDetails"

class AlbumContainer extends Component {
    componentDidMount(){


    }

    render(){
        return(
            <AlbumDetails/>
        )
    }



}


const mapStateToProps = state => {

}

const mapDispatchToProps = {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumContainer)