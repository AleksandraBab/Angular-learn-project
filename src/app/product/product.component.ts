import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from 'src/shared/models';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	@Input() product!: IProduct;

	ngOnInit(): void {
		console.log('er', this.product);
	}
}
