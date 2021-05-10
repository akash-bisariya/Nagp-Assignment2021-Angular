import { CartItem } from './cartItem';

export interface CartModel {
    customer_id: string;
    cartItem: CartItem[];
}