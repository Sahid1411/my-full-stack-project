import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
            quantity: { type: Number, default: 1 }
        }
    ],
},

{ collection: "cart" }  // ✅ Forces Mongoose to use `cart`

);


export default mongoose.model("Cart",CartSchema)
  