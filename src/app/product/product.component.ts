import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct, IProductFull } from 'src/shared/models';
import { ProductsApiService } from 'src/shared/services/products-api.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, OnDestroy {
	public id!: string;
	public product!: IProductFull;
	public characteristicsToShow: number = 2;
	public characteristicsuttonText: string = 'Show more';
	private subscription: Subscription;
	private productSubscription!: Subscription;

	constructor(private activateRoute: ActivatedRoute, private productsService: ProductsApiService, private cd: ChangeDetectorRef) {
		this.subscription = activateRoute.params.subscribe(params => (this.id = params['id']));
	}

	public ngOnInit(): void {
		this.productSubscription = this.productsService.getProduct(this.id).subscribe((product: IProductFull) => {
			this.product = product;
			this.cd.markForCheck();
		});
	}

	public ngOnDestroy(): void {
		this.productSubscription.unsubscribe();
		this.subscription.unsubscribe();
	}

	public setCharacteristicsAmount(): void {
		if (this.characteristicsToShow === 2) {
			this.characteristicsToShow = this.product.characteristics.length;
			this.characteristicsuttonText = 'Hide';
		} else {
			this.characteristicsToShow = 2;
			this.characteristicsuttonText = 'Show more';
		}
	}
}
