import { ActionTypes } from "../contents/Action-types";

export const setProduct =products =>{
    return{
        type: ActionTypes.SET_PRODUCT,
        payload:products

    }
}

export const selectedProduct= product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload:product

    }
}