import { map, Observable } from 'rxjs';
import { IProduct, IProductList } from 'src/shared/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsApiService {
	constructor(private http: HttpClient) {}

	public getProducts(): Observable<Array<IProduct>> {
		return this.http.get<IProductList>('products/suggestion').pipe(map((data: IProductList) => data.data.items));
	}
}
