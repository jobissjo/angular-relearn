export interface Product {
    id:number,
    name:string,
    description:string,
    brand:string,
    gender:string,
    category:string,
    colors: string[],
    price:number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL : string, 
    slug: string


}