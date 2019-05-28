import {combineReducers} from "redux"
import {showAlbums} from "./albums"

const rootReducer = combineReducers({
    albums: showAlbums
})

export default rootReducer