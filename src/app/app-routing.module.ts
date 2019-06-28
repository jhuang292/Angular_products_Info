import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAppComponent } from './product-app/product-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductAppComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**',   component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
