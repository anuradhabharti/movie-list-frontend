import {FETCH_MOVIES, FETCH_TOKEN, FETCH_USER} from '../actions/types'

const initialState={
    movies:[],

}
export default function (state = initialState, action) {
    switch (action.type) {
         case FETCH_MOVIES:
           return{
              ...state,
              movies:action.payload
           }
           case FETCH_TOKEN:
            return{
               ...state,
               token:action.payload
            }
            case FETCH_USER:
               return{
                  ...state,
                  user:action.payload
               }
           default:
               return state;
     }
 }