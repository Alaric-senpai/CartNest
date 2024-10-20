export interface Product {
    product_name: string;
    price:any;
    category:Number;
    brand:Number;
    description: string;
    instock:Number,
    tags: array[] | null;
    other_images: array[] | null;
    main_image: string;
}

export interface array{
    name:string;
}
