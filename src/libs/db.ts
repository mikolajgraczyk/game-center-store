import mongoose from 'mongoose';

const connect = async () => {
 try{
  await mongoose.connect(process.env.MONGO_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongo connection successful");
 }catch(error){
  throw new Error("Error in connectiong to mongodb");
 }
};

export default connect;



await mongoose.connect(process.env.MONGO_URI as string).catch((err) => {
  console.log(`Initial Distribution API Database connection error occured -`, err);
});