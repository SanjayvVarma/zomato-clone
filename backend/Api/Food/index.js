import express from "express";
import mongoose from "mongoose";
import { FoodModel } from "../../database/allModels.js";
import { validateCategory, validateId } from "../../Validation/common.Validation.js";

const Router = express.Router();

/**
 * Route     /:_id
 * Des       Create new food Item
 * Params    none
 * Access    Public
 * Method    POST
 */
// Home Work
Router.post("/new", async (req, res) => {
    try {
        const { foodData } = req.body;

        const food = await FoodModel.create({ ...foodData });

        return res.json({ food });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /:_id
 * Des       Get food details on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ error: "Invalid food ID" });
        }

        const food = await FoodModel.findById(_id);

        if (!food) {
            return res.status(404).json({ error: `Food not found with id ${_id}` });
        }

        return res.json({ food });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/**
 * Route     /r:_id
 * Des       Get all food based on particular restaurant
 * Params    _id
 * Access    Public
 * Method    GET
 */
 Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId (req.params);
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /c:_category
 * Des       Get all food based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */

Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;

        // Validate category (Assuming validateCategory function exists)
        await validateCategory(req.params);

        // Find all food items that match the category (case-insensitive)
        const foods = await FoodModel.find({
            category: { $regex: category, $options: "i" },
        });

        if (!foods || foods.length === 0) {
            return res.status(404).json({ error: `No food items matched with category "${category}"` });
        }

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;