import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryProductsComponent } from './category-products.component';
import { CategoryProductRoutingModule } from './category-products-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [CategoryProductsComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatCheckboxModule,
		HttpClientModule,
		MatProgressSpinnerModule,
		CategoryProductRoutingModule,
		SharedModule,
	],
	providers: [],
	exports: [CategoryProductsComponent],
})
export class CategoryProductsModule {}
