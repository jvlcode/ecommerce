import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../models/product.model";

export const addWishlistItem = createAction(
  '[Wishlist Component] Add Wishlist Item',
  props<{product:ProductModel}>()
  );
