import mongoose, { ConnectOptions } from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions,
    );
  } catch (error) {
    throw new Error('Error in connectiong to mongodb');
  }
};

export default connect;
