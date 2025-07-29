import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';

//main file for navigation


//Path - store address of file
//Components - where the components or functions connected with the files


export const routes: Routes = [

{ path: '', component:HomeComponent },
{ path: 'products', component:ProductsComponent },
{ path: 'about', component:AboutComponent },
{ path: 'customer', component:CustomerComponent },
{ path: '**', redirectTo: '', pathMatch: 'full'},

];

export const appRouting = provideRouter(routes);
