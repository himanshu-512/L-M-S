import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

export const generateToken = (res,user,message) => {
    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    console.log(token);
    return res.status(200)
    .cookie('token',token,{
        httpOnly:true,
        sameSite: "strict",
        maxAge:7*24*60*60*1000
    })
    .json({
        seccess:true,
        message,
        token,
        user
    });
}