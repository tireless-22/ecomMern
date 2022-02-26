import mongoose from "mongoose";

const connectDB = async () => {
	try{
		const conn = await mongoose.connect("mongodb+srv://knk:knk@crud.f2ly3.mongodb.net/ecomMongo?retryWrites=true&w=majority", {
		useNewUrlParser:true,
	})
	console.log(`mongodb connected ${conn}`)
	}
	catch (e) {
		console.log(e);
		process.exit(1);
	}
}

export default connectDB;

















