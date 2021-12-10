import { createReducer,on } from "@ngrx/store";
import { addItem, removeItem, updateItemQty } from "./cart.actions";
import { ProductModel } from "../models/product.model";

export const initialState:Array<{product:ProductModel,qty:number}> = [{product:new ProductModel(1,'Product 1',5,'assets/img/product/details/product-details-1.jpg',['assets/img/product/details/thumb-1.jpg'],'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.','product-1',1,2,3,true,false,false),qty:3}]
export const cartReducer = createReducer(
  initialState,
  on(removeItem,(state,item)=>{
    let f_item = state.find(i=>i.product.id===item.id)

    if(f_item!==undefined){


      //delete item
      let f_state = state.filter(i=>i.product.id!==item.id)

      if(!f_state.length){
        state = [];
      }else{
        state = [...f_state];
      }


    }
    console.log('in state');

    console.log(state);
    return state;
  })
  ,
  on(updateItemQty,(state,item)=>{
      let f_item = state.find(i=>i.product.id===item.id)
      if(f_item!==undefined){
        //update item qty
        let f_state = state.filter(i=>i.product.id!==item.id)
        let u_item = {...f_item,qty:+item.qty};
        state = [...f_state,u_item];

        }
      return state;
  }),
  on(addItem,(state,item)=>{
        let f_item = state.find(i=>i.product.id===item.product.id)
        if(f_item!==undefined){
            //update item qty
            let f_state = state.filter(i=>i.product.id!==item.product.id)
            let u_item = {...f_item,qty:+f_item.qty+ +item.qty};
            state = [...f_state,u_item];

        }else{
            //add new item
            state = [...state,item];
        }
      return [...state]
  }),
);
