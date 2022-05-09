import { ActionTypes } from "../contents/Action-types";



const initialState = {
    products:[
        {
            id: 1,
            title:"tolu",
            category: 'programmer'
        }
    ]
}
export const ProductReducer =(state=initialState, {initial}, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCT:
            return state
            default: return state
    }
}