import mongoose from "mongoose";

export default async () => {

    mongoose.connect(process.env.MONGO_URL, {
        dbName: "ZOMATO"
    }).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("some error occured while connecting to database:", err);
    });
}