import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductResolver } from './resolver/product.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolver } from './resolver/product-detail.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomePageComponent, resolve:{ productList:ProductResolver }},
  { path: 'home/category/:category',component: HomePageComponent, resolve:{ productList:ProductResolver }},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'product/:productId', component: ProductDetailComponent, resolve: { product: ProductDetailResolver }},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
