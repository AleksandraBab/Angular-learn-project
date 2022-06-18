import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PickItemDirective } from 'src/shared/directives/pick-item.directive';
import { CategoryProductsComponent } from './category-products.component';
import { CategoryProductRoutingModule } from './category-products-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
	declarations: [CategoryProductsComponent],
	imports: [CommonModule, MatButtonModule, HttpClientModule, MatProgressSpinnerModule, CategoryProductRoutingModule, SharedModule],
	providers: [],
	exports: [CategoryProductsComponent],
})
export class CategoryProductsModule {}
