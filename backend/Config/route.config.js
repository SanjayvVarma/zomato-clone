import dotenv from 'dotenv';
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { UserModel } from "../database/allModels.js";

dotenv.config({ path: "./config/config.env" });

const googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
};

export default (passport) => {
    passport.use(
        new GoogleStrategy(googleOptions, async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await UserModel.findOne({ email: profile.emails[0].value });
                if (user) {
                    return done(null, user);
                }

                const newUser = new UserModel({
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                });

                await newUser.save();
                return done(null, newUser);
            } catch (error) {
                return done(error, false);
            }
        })
    );

    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserModel.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });
};
