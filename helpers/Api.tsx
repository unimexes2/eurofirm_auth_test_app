import axios from 'axios';

export type Product = {
  id: number;
  brand: string;
  category: string;
  price:number;
  rating:number;
  stock:number;
  thumbnail:string;
  title:string;
  images: string[];
  description:string;
  
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products');
  return response.data.products;
};

export const fetchProduct = async (product:any): Promise<any> => {
    let route='https://dummyjson.com/products/'+product.productId;
    const response = await axios.get<{ products: Product[] }>(route)
    return response.data;
  };
