import {FETCH_NOWPLAYING} from '../actions/types'

const initialState={
    nowPlayingMovies:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
         case FETCH_NOWPLAYING:
           return{
              ...state,
              nowPlayingMovies:action.payload
           }
           default:
               return state;
     }
 }