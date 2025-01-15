import mongoose from "mongoose";




export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    });

    console.log(`MongoDB Connected: -> L M S Database`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}