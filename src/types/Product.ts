export interface Product {
    _id: string;
    name: string;
    price: number;
    discount_price?: number;
    description: string;
    images: string[];
    colors?: string[];
    sizes?: string[];
    delivery_info?: string;
    return_info?: string;
}

export interface OrderProduct {
    productId: {
        _id: string;
        name: string;
        images: string[];
        colors: string[];
        sizes: string[];
        price: number;
    };
    quantity: number;
}
