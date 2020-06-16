import {FETCH_NOWPLAYING, FETCH_POPULAR,FETCH_UPCOMING,FETCH_MOVIES} from '../actions/types'

const initialState={
    nowPlayingMovies:[],
    popularMovies:[],
    upcomingMovies:[],
    movies:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
         case FETCH_MOVIES:
           return{
              ...state,
              movies:action.payload
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