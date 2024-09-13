import mongoose from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
  image?: string;
}
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
  cart: ICartItem[];
  orders: IOrderItem[];
}

interface ICartItem {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

interface IOrderItem {
  productId: mongoose.Schema.Types.ObjectId;
  quantity: number;
  orderDate: Date;
  status: string;
}