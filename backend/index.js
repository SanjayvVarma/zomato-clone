import express from 'express';
import passport from 'passport';
import session from "express-session";
import cors from 'cors';
import helmet from 'helmet';
//private route authorization config
import privateRouteConfig from "./Config/route.config.js";
import googleAuthConfig from './Config/google.config.js';
import passportConfig from './Config/passport.config.js';
//env
import {config} from 'dotenv';
import dbconnection from './database/dbconnection.js';
//Route
import Auth from './Api/Auth/index.js'
import Food from './Api/Food/index.js'
import User from './Api/User/index.js'
import Menu from './Api/Menu/index.js'
import Image from './Api/Image/index.js'
import Review from './Api/Review/index.js'
import Order from './Api/Order/index.js'
import Restaurant from './Api/Restaurant/index.js'

config({ path: "./config/config.env" });
//private route authorization additional config
privateRouteConfig(passport);
googleAuthConfig(passport);
passportConfig(passport)
const zomato = express(); //like app  

zomato.use(cors());
zomato.use(helmet());

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: true }));
zomato.use(session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/", (req, res) => {
    res.json({
        message: "Server is up"
    });
});

zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/restaurant", Restaurant);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/review", Review);

dbconnection()

zomato.listen(process.env.PORT, () => {
    console.log("Server is up", process.env.PORT);

});