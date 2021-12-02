import { ProductModel } from "../../models/product.model";

export interface AppState{
  cart:ReadonlyArray<{product:ProductModel,qty:number}>,
  wishlist:ReadonlyArray<{product:ProductModel}>
}
