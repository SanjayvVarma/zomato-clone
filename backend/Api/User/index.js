import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels.js";

const Router = express.Router();

/*
*Route    /
*Desc     Get User details authorized
*Params   token
*Method   GET
*Access   Private
*/
Router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { email, fullname, phone, address } = req.user;

        return res.json({ user: { email, fullname, phone, address } });
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
Router.get("/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const user = await UserModel.findById(_id);
        if(!user) return res.status(404).json({success:false, message:"User not found"});

        return res.status(201).json({success:true, user});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }    
})
//Updating the User data
Router.put("/update/:_id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;
        userData.password = undefined;
        const updateUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData,
        }, {
            new: true
        });
        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;