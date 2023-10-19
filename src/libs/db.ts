import mongoose from "mongoose";

const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI as string)
    .catch((err) => {
      console.log(
        `Initial Distribution API Database connection error occured -`,
        err
      );
    });
};

export default connect;
