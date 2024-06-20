import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: { 
        type: mongoose.Types.ObjectId, 
        ref: "foods" 
    },
    restaurant: { 
        type: mongoose.Types.ObjectId, 
        ref: "restaurants"  // Corrected reference
    },
    user: { 
        type: mongoose.Types.ObjectId, 
        ref: "users" 
    },
    rating: { 
        type: Number, 
        required: true,
        min: 1,
        max: 5  // Assuming a 5-star rating system
    },
    reviewText: { 
        type: String, 
        required: true 
    },
    isRestaurantReview: { 
        type: Boolean, 
        required: true 
    },
    isFoodReview: { 
        type: Boolean, 
        required: true 
    },
    photos: [{
        type: mongoose.Types.ObjectId, 
        ref: "images"
    }]
}, {
    timestamps: true
});

export const ReviewModel = mongoose.model("reviews", ReviewSchema);
