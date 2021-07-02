import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { SamproductsComponent } from './samproducts/samproducts.component';

const routes: Routes = [{path:'home',component: HomeComponent},
{path:'about',component:AboutComponent},
{path:'products',component: ProductsComponent},
{path:'signin',component:SigninComponent},
{path:'login',component:LoginComponent},
{path:'products/samsung',component:SamproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Routingcomponent=[HomeComponent, AboutComponent , ProductsComponent,
 LoginComponent,SigninComponent]
 