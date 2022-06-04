import { AboutComponent } from './../about/about.component';
import { ProductsListModule } from './../products-list/products-list.module';
import { SidenavComponent } from './sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'about', component: AboutComponent },
          {
            path: '',
            loadChildren: () => import('../products-list/products-list.module').then(m => m.ProductsListModule)
          },
        ]
      }
    ]
  }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SideNavRoutingModule {}
