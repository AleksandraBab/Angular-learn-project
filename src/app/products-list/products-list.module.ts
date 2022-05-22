import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list.component';
import { ProductComponent } from '../product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsApiService } from 'src/shared/services/products-api.service';

@NgModule({
	declarations: [ProductsListComponent, ProductComponent],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, HttpClientModule],
	providers: [ProductsApiService],
	exports: [ProductsListComponent, ProductComponent],
})
export class ProductsListModule {}