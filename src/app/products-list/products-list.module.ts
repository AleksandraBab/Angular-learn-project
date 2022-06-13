import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PickItemDirective } from 'src/shared/directives/pick-item.directive';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent, PickItemDirective],
	imports: [CommonModule, MatSidenavModule, MatButtonModule, HttpClientModule, MatProgressSpinnerModule, ProductsListRoutingModule],
	providers: [],
	exports: [ProductsListComponent, ProductCardComponent],
})
export class ProductsListModule {}
