export interface IProduct {
	name: string;
	_id: string;
	feedbacksCount: number;
	subCategory: string;
	images: Array<{
		url: string;
		source: string;
	}>;
	price: number;
	rating: number;
	status: number;
}

export interface IProductList {
	data: IProductListData;
}

export interface IProductListData {
	items: Array<IProduct>;
	quantity: number;
}
