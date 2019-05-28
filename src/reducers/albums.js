import {
    SHOW_ALL_ALBUMS,
    SHOW_ALBUM_DETAILS
} from "../actions"

const initialState = {
    albums: []
}


export function showAlbums(state=initialState,action){
    switch(action.type){
        case SHOW_ALL_ALBUMS:
            return Object.assign({}, state, {albums: action.payload})
        default:
            return state
    }
}