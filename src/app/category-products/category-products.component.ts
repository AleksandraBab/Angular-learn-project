import { IProduct } from '../../shared/models';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ProductsApiService } from 'src/shared/services/products-api.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-category-products',
	templateUrl: './category-products.component.html',
	styleUrls: ['./category-products.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductsComponent implements OnDestroy {
	public id!: string;
	public products$!: Observable<Array<IProduct>>;
	private subscription: Subscription;

	public constructor(private activateRoute: ActivatedRoute, private productsService: ProductsApiService, private cd: ChangeDetectorRef) {
		this.subscription = activateRoute.params.subscribe(params => {
			this.id = params['id'];
			this.getProducts();
			this.cd.markForCheck();
		});
	}

	public getProducts(): void {
		this.products$ = this.productsService.getProductsFromCategory(this.id);
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	public trackById(index: number, product: IProduct): string {
		return product._id;
	}
}
