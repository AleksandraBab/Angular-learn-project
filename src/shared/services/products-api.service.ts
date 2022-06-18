import { ICategories, IProductFull, ICategory } from './../models';
import { map, Observable } from 'rxjs';
import { IProduct, IProductFullData, IProductList } from 'src/shared/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	public getProducts(): Observable<Array<IProduct>> {
		return this.http.get<IProductList>('products/suggestion').pipe(map((data: IProductList) => data.data.items));
	}

  public getProductsFromCategory(id: string): Observable<Array<IProduct>> {
		return this.http.get<IProductList>(`products/?subCat=${id}`).pipe(map((data: IProductList) => data.data.items));
	}

  public getProduct(id: string): Observable<IProductFull> {
		return this.http.get<IProductFullData>(`products/${id}`).pipe(map((data: IProductFullData) => data.data));
	}

  public getCategories(): Observable<Array<ICategory>> {
		return this.http.get<ICategories>('categories').pipe(map((data: ICategories) => data.data));
	}
}
