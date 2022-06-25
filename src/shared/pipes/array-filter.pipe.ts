import { IProduct } from './../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'arrayFilter',
	pure: false,
})
export class ArrayFilterPipe implements PipeTransform {
	transform(value: Array<IProduct>, array: Array<any>): Array<IProduct> {
		const filterArr: Array<string> = [];
		array.forEach((item: any) => {
			if (item.selected) {
				filterArr.push(item.name);
			}
		});

		if (filterArr.length === 0) {
			return value;
		}
		const newValue: Array<IProduct> = [];

		value.forEach((product: IProduct) => {
			if (filterArr.some((key: string) => product.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()))) {
				newValue.push(product);
			}
		});
		return newValue;
	}
}
