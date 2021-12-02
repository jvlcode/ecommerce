import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) {


  }
  items:Array<{product:ProductModel,qty:number}>=[]
  cartItems!:Observable<readonly {product:ProductModel,qty:number}[]>
  total:number=0;
  subtotal:number=0;
  discount=50;
  isCouponApplied=false;
  couponForm!:FormGroup

  ngOnInit(): void {
      this.couponForm = new FormGroup({
          'coupon':new FormControl(null,[Validators.required,this.couponValidator,this.couponApplyValidator.bind(this)]),

      })
    this.cartItems = this.cartService.items();
    this.isCouponApplied = this.cartService.coupon!==undefined?true:false;
    this.cartService.items().subscribe((items)=>{
        if(!(items.length>0)){
            this.cartService.coupon = undefined;
        }

        this.items  = [...items];

        this.subtotal= this.cartService.getTotal(this.items);
        this.total=this.subtotal;
        this.couponForm.get('coupon')?.updateValueAndValidity();
    });

  }
  applyCoupon(){

    if(this.couponForm.valid){
        this.isCouponApplied=true;
        this.cartService.addCoupon('Some');
        this.total -= this.discount;
    }
  }

  couponValidator(control:FormControl):{[key:string]:boolean}|null{
        if(control.value!="test"){
            return {"couponValid":true}
        }

        return null;

  }
  couponApplyValidator():{[key:string]:boolean}|null{
    if(this.total<this.discount){
        return {"couponApply":true}
    }
    return null;
  }


}
