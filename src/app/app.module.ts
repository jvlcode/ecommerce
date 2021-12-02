import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailComponent } from './product/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { cartReducer } from './store/cart.reducer';
import { ProductComponent } from './product/product.component';
import { wishlistReducer } from './store/wishlist.reducer';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:slug',component:DetailComponent},
  {path:'category/:slug',component:CategoryComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent,
    CheckoutComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({cart:cartReducer,wishlist:wishlistReducer}),
    StoreDevtoolsModule.instrument({logOnly:true}),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
