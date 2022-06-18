import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListComponent } from './products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
	declarations: [ProductsListComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatButtonModule,
		HttpClientModule,
		MatProgressSpinnerModule,
		SharedModule,
		ProductsListRoutingModule,
	],
	providers: [],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
