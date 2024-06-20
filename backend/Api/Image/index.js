import express from "express";
import multer from "multer";
import { ImageModel } from "../../database/allModels.js";
import { v2 as cloudinaryV2 } from 'cloudinary';

const Router = express.Router();

cloudinaryV2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
*Route    /
*Desc     Upload a Image to Cloudinary and save link to mongoDB
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        
        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        
        // Upload image to Cloudinary
        cloudinaryV2.uploader.upload_stream({ resource_type: 'auto' },
            async (error, result) => {
                if (error) {
                    return res.status(500).json({ error: error.message });
                }
                
                // Create new ImageModel document in MongoDB
                const dbUpload = await ImageModel.create({
                    cloudinary_id: result.public_id,
                    image_url: result.secure_url,
                    // other fields as needed
                });
                
                return res.status(200).json({ dbUpload });
            }
        ).end(file.buffer);
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route    /:_id
*Desc     Get an Image by ID
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/:_id", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);
        if (!image) {
            return res.status(404).json({ error: "Image not found" });
        }
        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;