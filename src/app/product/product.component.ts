import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from 'src/shared/models';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	@Input() id!: string;
	public product!: IProduct;
}
