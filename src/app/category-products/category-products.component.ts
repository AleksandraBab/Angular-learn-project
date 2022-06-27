import { IPrice } from './../../shared/models';
import { IProduct } from '../../shared/models';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ProductsApiService } from '../../shared/services/products-api.service';
import { catchError, Observable, of, Subscription, map } from 'rxjs';
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
	public brands: Array<{ name: string; selected: boolean }> = [];
	public key: string = '';
	public allSelected: boolean = false;
	public brandsAmount: number = 6;
	public buttonText: string = 'Show more';
	public priceFrom: string = '';
	public priceTo: string = '';
	public minPrice: number = 0;
	public maxPrice: number | undefined;
	public error: string = '';
	private subscription: Subscription;
	private brandSubscription!: Subscription;
	private priceSubscription!: Subscription;

	public constructor(private activateRoute: ActivatedRoute, private productsService: ProductsApiService, private cd: ChangeDetectorRef) {
		this.subscription = activateRoute.params.subscribe(params => {
			this.id = params['id'];
			this.getProducts();
			this.cd.markForCheck();
		});
	}

	public getProducts(): void {
		this.products$ = this.productsService.getProductsFromCategory(this.id);

		this.priceSubscription = this.productsService.getPrices(this.id).subscribe((price: IPrice) => {
			this.minPrice = price.min;
			this.maxPrice = price.max;
		});

		this.brandSubscription = this.productsService.getBrands(this.id).subscribe((brands: Array<string>) => {
			brands.forEach((brand: string) => {
				this.brands.push({
					name: brand,
					selected: false,
				});
			});
			this.cd.markForCheck();
		});
	}

	public updateAllSelected(): void {
		this.allSelected = this.brands.every((brand: { name: string; selected: boolean }) => brand.selected);
	}

	public setAll(value: boolean): void {
		this.allSelected = value;
		this.brands.forEach((brand: { name: string; selected: boolean }) => (brand.selected = value));
	}

	public showAllBrands(): void {
		if (this.brandsAmount === 6) {
			this.brandsAmount = this.brands.length;
			this.buttonText = 'Hide';
		} else {
			this.brandsAmount = 6;
			this.buttonText = 'Show more';
		}
	}

	public filterPrices(): void {
		this.products$ = this.productsService.getProductsInPriceRange(
			this.id,
			this.priceFrom || '0',
			this.priceTo || (this.maxPrice as number).toString(),
		);
	}

	public trackById(index: number, product: IProduct): string {
		return product._id;
	}

	public ngOnDestroy(): void {
		this.subscription.unsubscribe();
		this.brandSubscription.unsubscribe();
	}
}
