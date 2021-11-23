import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:slug',component:DetailComponent},
  {path:'category/:slug',component:CategoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    CategoryComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
