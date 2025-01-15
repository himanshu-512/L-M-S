import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../uitils/genreateToken.js";



export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "All fields are required" });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res
                .status(400)
                .json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        return res
            .status(201)
            .json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Internal server error" });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password,role } = req.body;
        if (!email || !password || !role) {
            return res
                .status(400)
                .json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Wrong Password" });
        }
        return res
            .status(200)
            .cookie('token',generateToken(res,user,"User logged in successfully"),{
                httpOnly:true,
                sameSite: "strict",
                maxAge:7*24*60*60*1000
            })
            .json({ message: "User logged in successfully" });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Login Failed" });
        
    }
}

export const logout = async (req, res) => {
    try {
        
        return res.status(200)
        .cookie("token", "", {maxAge:0})
        .json({
            message:"Logged out successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ message: "Internal server error" });
    }
}