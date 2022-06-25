import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickItemDirective } from 'src/shared/directives/pick-item.directive';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ArrayFilterPipe } from './pipes/array-filter.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

@NgModule({
	declarations: [PickItemDirective, ProductCardComponent, FilterPipe, ArrayFilterPipe, OnlyNumbersDirective],
	imports: [CommonModule, RouterModule],
	providers: [],
	exports: [PickItemDirective, ProductCardComponent, FilterPipe, ArrayFilterPipe, OnlyNumbersDirective],
})
export class SharedModule {}
