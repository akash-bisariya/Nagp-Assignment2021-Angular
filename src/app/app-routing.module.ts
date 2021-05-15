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
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomePageComponent, resolve:{ productList:ProductResolver }},
  { path: 'home/category/:category',component: HomePageComponent, resolve:{ productList:ProductResolver }},
  { path: 'home/search/:searchTerm',component: HomePageComponent, resolve:{ productList:ProductResolver }},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'product/:productId', component: ProductDetailComponent, resolve: { product: ProductDetailResolver }},
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
