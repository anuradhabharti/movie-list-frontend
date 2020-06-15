import {FETCH_NOWPLAYING, FETCH_POPULAR,FETCH_UPCOMING} from '../actions/types'

const initialState={
    nowPlayingMovies:[],
    popularMovies:[],
    upcomingMovies:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
         case FETCH_NOWPLAYING:
           return{
              ...state,
              nowPlayingMovies:action.payload
           }
           case FETCH_POPULAR:
           return{
              ...state,
              popularMovies:action.payload
           }
           case FETCH_UPCOMING:
            return{
               ...state,
               upcomingMovies:action.payload
            }
           default:
               return state;
     }
 }