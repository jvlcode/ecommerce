import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: '.app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService:CartService) { }
   @Input() item!:{product:ProductModel,qty:number}
   @Input() qty!:number;
  ngOnInit(): void {



  }
    changeQty(event:Event){
        let el =(event.target as HTMLInputElement);
        el.focus();
        let no = parseInt(el.value);

            this.cartService.updateQty(this.item.product.id,no);

    }
    remove(){
        this.cartService.remove(this.item.product.id);
    }

}
