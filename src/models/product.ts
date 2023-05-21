export interface Product {
  id: number;
	name: string;
	description?: string;
	price: number;
	image?: string;
	origin?: string;
	expiryDate?: Date;
	harvestDate?: Date;
	availableQuantity: number;
	unit?: string;
	weight?: number;
	cultivationMethod?: string;
	organicCertifications?: boolean;
	categoryId: number;
	storeId: number;
	state: boolean;
}
