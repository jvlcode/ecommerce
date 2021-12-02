import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartService:CartService,private wishlistService:WishlistService) { }
  @Input() product!:ProductModel;
  ngOnInit(): void {
  }

  addToCart(product:ProductModel){
    this.cartService.addProduct(product,1);
  }
  addToWishlist(product:ProductModel){
    this.wishlistService.addProduct(product)
  }

}
