import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { addItem, updateItemQty,removeItem } from "../store/cart.actions";
import { ProductModel } from "../models/product.model";
import { selectCartItems } from "../store/state/cart.selector";
@Injectable()
export class CartService{
    cart:Object[]=[];
    coupon!:string|undefined;
    constructor (private store:Store){

    }
    addCoupon(coupon:string){
        this.coupon = coupon;
    }
    items() {
      return this.store.select(selectCartItems);
    }
    addProduct(product:ProductModel,qty:number){
      let new_product = Object.assign({},product);
      this.store.dispatch(addItem({product:new_product,qty:qty}))
    }

    updateQty(id:number,qty:number){
        this.store.dispatch(updateItemQty({id:id,qty:qty}))
    }
    remove(id:number){
        this.store.dispatch(removeItem({id:id}))

    }

    getTotal(items:Array<{product:ProductModel,qty:number}>){
        let total:number=0;
        for (let item  of items) {
            total += item.product.price * item.qty;
        }
        return total;
    }

}
