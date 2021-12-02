import { createAction,props } from "@ngrx/store";
import { ProductModel } from "../models/product.model";

export const addItem = createAction(
  '[Cart Component] Add Item',
  props<{product:ProductModel,qty:number}>()
);
export const updateItemQty = createAction(
    '[Cart Component] Update Item Quantity',
    props<{id:number,qty:number}>()
  );
export const removeItem = createAction(
'[Cart Component] Remove Item',
props<{id:number}>()
);

