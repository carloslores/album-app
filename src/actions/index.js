import axios from "axios"

export const SHOW_ALL_ALBUMS = "SHOW_ALL_ALBUMS"
const SHOW_ALBUM_DETAILS = "SHOW_ALBUM_DETAILS"


export const allAlbums = () => {
    return (dispatch, getaState)=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(res=>{
                console.log(res.data)
                dispatch({type: SHOW_ALL_ALBUMS, payload: res.data})
            })
    }
}