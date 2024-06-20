// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const UserSchema = new mongoose.Schema({
//     fullname: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String },
//     address: [{ detail: { type: String }, for: { type: String } }],
//     phone: [{ type: Number }]
// }, {
//     timestamps: true
// });

// //attachments of model
// //signing a token /creating
// UserSchema.methods.generateJwtToken = function () {
//     return jwt.sign({ user: this._id.toString() }, "ZomatoClone");
// };

// //helper functions
// //to check if this data exists or not

// //email and phone check
// UserSchema.statics.findByEmailAndPhone = async ({ email, phone }) => {
//     const checkUserByEmail = await this.findOne({ email });
//     const checkUserByPhone = await this.findOne({ phone });
//     if (checkUserByEmail || checkUserByPhone) {
//         throw new Error("User already existed with this fields...");
//     }
//     return false;
// };

// //email and password check
// UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
//     const user = await this.findOne({ email });
//     if (!user) throw new Error("User does not exist...");
//     const doesPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!doesPasswordMatch) throw new Error("Wrong ceredentials...");
//     return user;
// };

// //hasing password
// UserSchema.pre('save', function (next) {
//     const user = this;
//     //password is encrypted here
//     if (!user.isModified('password')) return next();
//     //generate bcrypt salt
//     bcrypt.genSalt(8, (error, salt) => {
//         if (error) return next(error);
//         bcrypt.hash(user.password, salt, (error, hash) => {
//             if (error) return next(error);
//             //asssigning hashed password
//             user.password = hash;
//             return next()
//         })
//     })
// })

// export const UserModel = mongoose.model("users", UserSchema)



import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phone: [{ type: String }]
}, {
    timestamps: true
});

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES });
};

// Email and phone check
UserSchema.statics.findByEmailAndPhone = async function (data) {
    if (!data || !data.email || !data.phone) {
        throw new Error("Email and phone must be provided.");
    }
    const { email, phone } = data;
    const checkUserByEmail = await this.findOne({ email });
    const checkUserByPhone = await this.findOne({ phone });
    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exists with these fields...");
    }
    return false;
};

// Email and password check
UserSchema.statics.findByEmailAndPassword = async function (data) {
    if (!data || !data.email || !data.password) {
        throw new Error("Email and password must be provided.");
    }
    const { email, password } = data;
    const user = await this.findOne({ email });
    if (!user) throw new Error("User does not exist...");
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) throw new Error("Wrong credentials...");
    return user;
};

// Hashing password
UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);
            user.password = hash;
            return next();
        });
    });
});

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ id: this._id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES })
};

export const UserModel = mongoose.model("users", UserSchema);
