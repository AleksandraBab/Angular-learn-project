import { IProduct } from './../../shared/models';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ProductsApiService } from 'src/shared/services/products-api.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	public products!: Array<IProduct>;

	public constructor(private productsService: ProductsApiService, private cd: ChangeDetectorRef) {}

	public ngOnInit(): Subscription {
		return this.productsService.getProducts().subscribe((data: Array<IProduct>) => {
			this.products = data;
			this.cd.markForCheck();
		});
	}

	public trackById(product: IProduct): string {
		return product._id;
	}
}
