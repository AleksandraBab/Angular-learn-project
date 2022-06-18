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

export interface IFeedback {
	_id: string;
	product: string;
	advantages: string;
	rate: number;
}

export interface ICharacteristic {
	title: string;
	items: Array<ICharacteristicItem>;
}

export interface ICharacteristicItem {
	name: string;
	value: string;
	isExtended?: boolean;
}

export interface IProductFullData {
	data: IProductFull;
	error: string;
}

export interface IProductFull {
	_id: string;
	description: string;
	feedbacks: Array<IFeedback>;
	feedbacksCount: number;
	images: Array<{
		url: string;
		source: string;
	}>;
	name: string;
	price: number;
	rating: number;
	status: number;
	subCategory: string;
	characteristics: Array<ICharacteristic>;
	brand: string;
}

export interface ICategories {
	data: Array<ICategory>;
	error: string;
}

export interface ICategory {
	_id: string;
	name: string;
	subCategories: Array<ISubCategory>;
}

export interface ISubCategory {
	_id: string;
	name: string;
	category: string;
}
