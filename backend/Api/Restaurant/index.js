import express from "express";

import { RestaurantModel } from "../../database/allModels.js";
import { ValidateRestaurantCity, ValidateSearchString } from "../../Validation/restaurant.Validation.js";

const Router = express.Router();

/*
*Route    /create
*Desc     create a Order
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/create", async (req, res) => {
    try {
        const { data } = req.body;
        const newData = await RestaurantModel.create({
            ...data
        });
        return res.status(201).json({
            success: true,
            Order: newData
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
*Route    /
*Desc     Get Restaurant by city
*Params   none
*Method   GET
*Access   Public
*/
Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;

        const restaurants = await RestaurantModel.find({ city: { $regex: new RegExp(city, "i") } });

        if (restaurants.length === 0) {
            return res.status(404).json({ error: `No Restaurants found in ${city}` });
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
*Route    /:_id
*Desc     Get Restaurant by id
*Params   _id
*Method   GET
*Access   Public
*/
Router.get("/:_id", async (req, res) => {
    try {
        //https://localhost:4000/restuarant/?city=mumbai
        const { _id } = req.params;
        const restuarant = await RestaurantModel.findById({ _id });
        if (!restuarant)
            return res
                .status(404)
                .json({ error: `No Restaurants found with id ${_id}` })
        return res.json({ restuarant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
*Route    /search/:searchstring
*Desc     Get Restaurant by searchstring
*Params   none
*Method   GET
*Access   Public
*/
Router.get("/search/:searchString", async (req, res) => {
    try {
        const { searchString } = req.params;

        // Validate the search string
        await ValidateSearchString({ searchString });

        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });

        if (restaurants.length === 0) {
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;