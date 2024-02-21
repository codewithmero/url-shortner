import mongoose from 'mongoose';

const DB_NAME="urlshortner";

const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    return true;
  } catch(error) {
    throw error;
  }
}

export { connectDB };