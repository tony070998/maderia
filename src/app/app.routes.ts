import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';


const APP_ROUTES : Routes = [
    { path:'home', component: HomeComponent },
    { path:'products', component: ProductsComponent},
    { path:'**', pathMatch:'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );