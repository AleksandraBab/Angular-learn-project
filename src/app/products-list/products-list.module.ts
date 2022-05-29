import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list.component';
import { ProductComponent } from '../product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PickItemDirective } from 'src/shared/directives/pick-item.directive';

@NgModule({
	declarations: [ProductsListComponent, ProductComponent, PickItemDirective],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, HttpClientModule, MatProgressSpinnerModule],
	providers: [],
	exports: [ProductsListComponent, ProductComponent],
})
export class ProductsListModule {}
