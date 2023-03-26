export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
  };
  
  export type RootStackParamList = {
    Main: undefined;
    ProductDetails: { product: Product };
  };
  