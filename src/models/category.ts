import { ProductDTO } from './products';

export type CategoryDTO = {
  id: number;
  name: string;
  products : ProductDTO[];
}