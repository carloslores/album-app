import axios from "axios"

export const SHOW_ALL_ALBUMS = "SHOW_ALL_ALBUMS"
export const SHOW_ALBUM_DETAILS = "SHOW_ALBUM_DETAILS"


export const allAlbums = () => {
    return (dispatch, getState)=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res=>{
           
                dispatch({type: SHOW_ALL_ALBUMS, payload: res.data})
            })
    }
}

export const getOneAlbum = (albumId)=>{
    return (dispatch, getState)=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then(res=>{
                
                dispatch({type: SHOW_ALBUM_DETAILS, payload: res.data})
            })

    }
}