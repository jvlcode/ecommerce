import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProductModel } from "../models/product.model";
import { selectWishlistItems } from "../store/state/wishlist.selector";
import { addWishlistItem } from "../store/wishlist.actions";

@Injectable()
export class WishlistService {
  get items() {
    return this.store.select(selectWishlistItems);
  }
  constructor(private store:Store){

  }
    addProduct(product:ProductModel){
      let new_product = Object.assign({},product);
        this.store.dispatch(addWishlistItem({product:new_product}))
    }
}
