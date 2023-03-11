import { SHELF } from './enums';
export interface IBook  {
    title: string,
    authors: string[];
    imageUrl: string
    id: number,
    shelf?: SHELF,
};