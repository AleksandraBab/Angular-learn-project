import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PickItemDirective } from 'src/shared/directives/pick-item.directive';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
	declarations: [PickItemDirective, ProductCardComponent],
  imports: [CommonModule],
	providers: [],
	exports: [PickItemDirective, ProductCardComponent],
})
export class SharedModule {}
