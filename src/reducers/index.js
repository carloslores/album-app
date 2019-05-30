import {combineReducers} from "redux"
import {showAlbums, albumDetails} from "./albums"

const rootReducer = combineReducers({
    albums: showAlbums,
    album: albumDetails,

})

export default rootReducer