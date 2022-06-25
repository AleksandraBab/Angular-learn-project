import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from 'src/shared/models';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() product!: IProduct;
	@Input() category!: string;

	public constructor(public router: Router) {}

	public navigate(): void {
		this.router.navigate(['home/category', this.category, this.product._id]);
	}

	public addToChart(event: Event): void {
		event.stopPropagation();
	}
}
