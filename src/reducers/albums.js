import {
    SHOW_ALL_ALBUMS,
    SHOW_ALBUM_DETAILS
} from "../actions"
import { existsTypeAnnotation } from "@babel/types";

const initialState = {
    albums: [],
    album: null
}


export function showAlbums(state=initialState,action){
    switch(action.type){
        case SHOW_ALL_ALBUMS:
            return Object.assign({}, state, {albums: action.payload})
        default:
            return state
    }
}

export function albumDetails(state=initialState, action){
    switch(action.type){
        case SHOW_ALBUM_DETAILS:
            return Object.assign({}. state, {album: action.payload})
        default:
            return state
    }
}