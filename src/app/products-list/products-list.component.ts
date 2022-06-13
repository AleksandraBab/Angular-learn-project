import { IProduct } from '../../shared/models';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsApiService } from 'src/shared/services/products-api.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	public products$!: Observable<Array<IProduct>>;

	public constructor(private productsService: ProductsApiService) {}

	public ngOnInit(): void {
		this.products$ = this.productsService.getProducts();
	}

	public trackById(index: number, product: IProduct): string {
		return product._id;
	}
}
