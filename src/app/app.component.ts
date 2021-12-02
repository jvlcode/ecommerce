import {  Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModel } from './models/product.model';
import { CartService } from './services/cart.service';
import { WishlistService } from './services/wishlist.service';
import { selectCartItems } from './store/state/cart.selector';
import { selectWishlistItems } from './store/state/wishlist.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CartService,WishlistService]
})
export class AppComponent  implements OnInit {

  cartItems:Array<{product:ProductModel,qty:number}>=[];
  cartTotal:number=0;
  wishlistItems:Array<{product:ProductModel}>=[]
  constructor (private store:Store,private cartService:CartService, private wishlistService:WishlistService){

  }
  ngOnInit(){
    this.cartService.items().subscribe((items)=>{
      this.cartItems = items.slice();
      this.cartTotal= this.cartService.getTotal(this.cartItems);

    });

    this.wishlistService.items.subscribe((list)=>{
      this.wishlistItems = list.slice();
    });
  }

}
