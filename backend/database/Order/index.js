import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    orderDetails: [{
        food: [{
            foodDetails: { type: mongoose.Types.ObjectId, ref: "foods", required: true },
            quantity: { type: Number, required: true }
        }],
        paymode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
            itemTotal: { type: Number, required: true },
            promo: { type: String, required: true },
            tax: { type: String, required: true },
            razor_payment_id: { type: String, required: true }
        }
    }]
}, {
    timestamps: true
});

export const OrderModel = mongoose.model("orders", OrderSchema);

