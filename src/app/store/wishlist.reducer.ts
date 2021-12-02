import { createReducer, on, props } from "@ngrx/store";
import { ProductModel } from "../models/product.model";
import { addWishlistItem } from "./wishlist.actions";

export const initialState:Array<{product:ProductModel}> = [];

export const  wishlistReducer = createReducer(
  initialState,
  on(addWishlistItem,(state,item)=>{
      if(state.find((s)=>s.product.id==item.product.id)!==undefined){

      }else{
        state = [...state,item];
      }
      return state
  })
);
