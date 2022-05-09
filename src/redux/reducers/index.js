import { ProductReducer } from "./ProductReducers";
import { combineReducers } from "redux";


export const rootReducers ={
    allProducts: ProductReducer
}