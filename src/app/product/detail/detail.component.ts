import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { WishlistService } from '../../services/wishlist.service';
declare var $:any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProductService,CategoryService,CartService]
})
export class DetailComponent implements OnInit,AfterViewInit {

  constructor(private productService:ProductService,private route:ActivatedRoute,private cartService:CartService,private wishlistService:WishlistService) { }
  product!:ProductModel|undefined;
  relatedProducts!:ProductModel[]|undefined;
  qty:number=1;
  isWished=false;
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.product = this.productService.findSlug(params['slug']);
      this.wishlistService.items.subscribe((list)=>{
        this.isWished = list.find(i=>i.product.id==this.product?.id)!==undefined?true:false
     });
      this.relatedProducts = this.productService.products.filter((p)=>p.id!==this.product?.id).sort((a,b)=>0.5-Math.random()).slice(0,4);

    });




  }

  addToWishlist(product:ProductModel){
    this.wishlistService.addProduct(product)
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  addToCart(product:ProductModel){
    this.cartService.addProduct(product,this.qty);
  }


  ngAfterViewInit(){
    $(".product__details__pic__slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      nav: true,
      navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true
  });
  }

}
