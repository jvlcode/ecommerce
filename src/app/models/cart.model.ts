import { ProductModel } from "./product.model";

export class CartModel{
  items!:Array<{product:ProductModel,qty:number;}>;
  coupon!:{code:string,discount:number}|undefined;

  constructor(items:Array<{product:ProductModel,qty:number}>){
    this.items = items;
  }

    addCoupon(coupon:{code:string,discount:number}){
        this.coupon = coupon;
    }

    getTotal(){
        let total=0
        for (let item of this.items) {
            total += item.product.price
        }
        return total;
    }
}
