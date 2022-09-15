export interface Options {
  label: string;
  values: string[];
}
export interface Product {
  id: string;
  image: string;
  price: number;
  name: string;
  options: Options[];
}
