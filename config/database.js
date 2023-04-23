import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("it is connected"));
  } catch (error) {
    console.log(error);
  }
};
