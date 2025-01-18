import { Course } from "../models/course.model";
import { User } from "../models/user.model";



export const createCourse = async (req, res) => {
    try {
        const { courseTitle, category } = req.body;

        if (!courseTitle || !category) {
            return res.status(400)
                .json({ message: "All fields are required" })
        }
        const course = await Course.create({
            courseTitle,
            category,
            creator: req.userId
        });
        return res.status(201)
            .json({ message: "Course created successfully", course })
    } catch (error) {
        return res.status(500)
            .json({ message: "Internal server error" })
    }

}

export const getCreaterCourse = async (req, res) => {
    try {
        const courses = await Course.find({ creator: req.userId });
        return res.status(200)
            .json({ courses })
    } catch (error) {
        return res.status(500)
            .json({ message: "Internal server error" })
    }
}

export const searchCourse = async (req, res) => {
    try {
        const {query = "", category = [],sortBy=""} = req.query;
        const searchCriteria = {
            isPublished: true,
            $or:[
              {  courseTitle: { $regex: query, $options: "i" }},
            ]
        }
    } catch (error) {
        return res.status(500)
            .json({ message: "Internal server error" })
        
    }
}