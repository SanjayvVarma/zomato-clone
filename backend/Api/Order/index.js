import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels.js";

const Router = express.Router();

/**
 * Route     /
 * Des       Get all orders by user id
 * Params    none
 * Access    Private
 * Method    GET
 */
Router.put(
    "/new",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { user } = req;
            const { orderDetails } = req.body;

            // Log the authenticated user and the order details
            console.log("Authenticated User:", user);
            console.log("Order Details:", orderDetails);

            // Validate orderDetails
            if (!orderDetails || !Array.isArray(orderDetails) || orderDetails.length === 0) {
                return res.status(400).json({ error: "Invalid order details" });
            }

            // Find and update or create a new order
            const addNewOrder = await OrderModel.findOneAndUpdate(
                { user: user._id },
                { $push: { orderDetails: orderDetails } },
                { new: true, upsert: true } // upsert: true creates a new document if no match is found
            );

            if (!addNewOrder) {
                // This should not happen due to upsert: true, but handle it just in case
                return res.status(500).json({ error: "Failed to add/update order" });
            }

            return res.json({ order: addNewOrder });
        } catch (error) {
            console.error("Error adding order:", error);
            return res.status(500).json({ error: error.message });
        }
    }
);

Router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { user } = req;

            const getOrders = await OrderModel.findOne({ user: user._id });

            if (!getOrders) {
                return res.status(400).json({ error: "Orders not found for this user" });
            }

            return res.status(200).json({ orders: getOrders });
        } catch (error) {
            console.error("Error fetching orders:", error);
            return res.status(500).json({ error: error.message });
        }
    }
);


/**
 * Route     /new
 * Des       Add new order
 * Params    none
 * Access    Private
 * Method    PUT
 */

export default Router;