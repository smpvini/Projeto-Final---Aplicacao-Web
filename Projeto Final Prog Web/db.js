
module.exports = connectDB;
import mongoose from ("mongoose");

function connectDatabase = () => {

  mongoose.connect("process.env.mongodb+srv:mongodb+srv://admin:<admin>@cluster0.a48266m.mongodb.net/?retryWrites=true&w=majority",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  )
    .then(() => console.log("MongoDB Atlas Connected!")).catch((error) => console.log(error));
};

export default connectDatabase;