import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../types/Types";
import bcrypt from 'bcrypt';


export const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
    },
  ],
  orders: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, required: true },
      orderDate: { type: Date, default: Date.now },
      status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' },
    },
  ],
  // timestamp
  //docs
});

userSchema.pre('save', async function (next) {
  const user = this as IUser;
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});


userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;