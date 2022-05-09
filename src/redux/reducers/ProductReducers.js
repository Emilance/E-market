import { ActionTypes } from "../contents/Action-types";



const initialState = {
    products:[]
}
export const ProductReducer =(state=initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return {...state, products :  payload}
            default: 
            return state
    }
}