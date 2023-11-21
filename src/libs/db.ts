import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('mongo connection successful');
  } catch (error) {
    throw new Error('Error in connecting to mongodb');
  }
};

export default connect;
