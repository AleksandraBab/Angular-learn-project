import { ICategories, IProductFull, ICategory, IPrice, IProductSuggetionList, IProductSuggetionData } from './../models';
import { catchError, delayWhen, EMPTY, map, Observable, retry, throwError } from 'rxjs';
import { IProduct, IProductFullData, IProductList } from 'src/shared/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	public getProducts(): Observable<Array<IProduct>> {
		return this.http.get<IProductSuggetionList>('products/suggestion').pipe(
			map((data: IProductSuggetionList) => data.data.items),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}

	public getProductsFromCategory(id: string): Observable<Array<IProduct>> {
		return this.http.get<IProductList>(`products/?subCat=${id}`).pipe(
			map((data: IProductList) => data.data.items),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}

	public getProductsInPriceRange(id: string, min: string, max: string): Observable<Array<IProduct>> {
		return this.http.get<IProductList>(`products/?subCat=${id}&prices=${min},${max}`).pipe(
			map((data: IProductList) => data.data.items),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}

	public getPrices(id: string): Observable<IPrice> {
		return this.http.get<IProductList>(`products/?subCat=${id}`).pipe(
			map((data: IProductList) => data.data.prices),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}

	public getBrands(id: string): Observable<Array<string>> {
		return this.http
			.get<{ data: Array<string>; error: string }>(`brands?subCat=${id}&prices=0,2000`)
			.pipe(map((data: { data: Array<string>; error: string }) => data.data));
	}

	public getProduct(id: string): Observable<IProductFull> {
		return this.http.get<IProductFullData>(`products/${id}`).pipe(
			map((data: IProductFullData) => data.data),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}

	public getCategories(): Observable<Array<ICategory>> {
		return this.http.get<ICategories>('categories').pipe(
			map((data: ICategories) => data.data),
			catchError((error: Error) => {
				console.log('err', error);
				return EMPTY;
			}),
		);
	}
}
