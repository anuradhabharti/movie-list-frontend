import {FETCH_MOVIES, FETCH_WATCHLIST,ADD_MOVIE,REMOVE_MOVIE,SEARCH_MOVIE,ERASE_SEARCH} from '../actions/types'

const initialState={
    movies:[],
    watchlist:[],
   

}
export default function (state = initialState, action) {
    switch (action.type) {
         case FETCH_MOVIES:
           return{
              ...state,
              movies:action.payload
           }
           case FETCH_WATCHLIST:
            return{
               ...state,
               watchlist:action.payload
            }
            case SEARCH_MOVIE:
                return{
                   ...state,
                   search:action.payload
                }
            case ADD_MOVIE:
            return{
               ...state,
               watchlist:[...state.watchlist,action.payload]
            }
            case REMOVE_MOVIE:
            return{
               ...state,
               watchlist:[...state.watchlist.filter(movie=>movie.movie_id===action.payload.movie_id)]
            }
           default:
               return state;
     }
 }