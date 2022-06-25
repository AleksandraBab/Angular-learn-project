import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models';

@Pipe({
	name: 'filterName',
})
export class FilterPipe implements PipeTransform {
	constructor() {}

	transform(value: Array<IProduct>, key: string): Array<IProduct> {
		return value.filter((product: IProduct) => product.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()));
	}
}
