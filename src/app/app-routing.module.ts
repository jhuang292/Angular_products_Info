import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAppComponent } from './product-app/product-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductAppComponent,
    children: [
      { path: 'detail', component: ProductDetailComponent}
    ]
  },
  { path: '**',   component: PageNotFoundComponent }
  // { path: 'products/', component: ProductDetailComponent, 
  // children: [
  //   { path: 'detail', component: DepartmentOverviewComponent},
  //   { path: 'contact', component: DepartmentContactComponent}
  // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
