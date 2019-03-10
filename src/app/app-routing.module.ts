import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { DietComponent } from './components/diet/diet.component';
import { StatsComponent } from './components/stats/stats.component';
import { AccountComponent } from './components/account/account.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'diet', component: DietComponent, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
