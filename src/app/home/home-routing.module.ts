import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryProductsComponent } from '../category-products/category-products.component';
import { ProductComponent } from '../product/product.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'category/:id',
				loadChildren: () => import('../category-products/category-products.module').then(m => m.CategoryProductsModule),
				children: [
					{ path: '', component: CategoryProductsComponent },
					{ path: ':id', component: ProductComponent },
				],
			},
			{
				path: '',
				loadChildren: () => import('../products-list/products-list.module').then(m => m.ProductsListModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
