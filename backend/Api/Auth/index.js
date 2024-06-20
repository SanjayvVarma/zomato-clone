import express from "express";
import passport from "passport";
import { UserModel } from "../../database/allModels.js";
import { ValidateLogin, ValidateRegister } from "../../Validation/auth.Validation.js";


const Router = express.Router();

/*
*Route    /register
*Desc     Register/create a user 
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/register", async (req, res) => {
    try {
        // Validate user data
        const userData = req.body.credentials;
        await ValidateRegister(userData);

        // Check if user already exists
        await UserModel.findByEmailAndPhone(userData);

        // Create new user
        const newUser = await UserModel.create(userData);

        // Generate token
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
*Route    /login
*Desc     login a existing user and create a token
*Params   none
*Method   POST
*Access   Public
*/
Router.post("/login", async (req, res) => {
    try {
        await ValidateLogin(req.body.credentials)
        const newUser = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "success" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

Router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

Router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Redirect or respond with token as needed
        res.redirect('/');
    }
);

export default Router;