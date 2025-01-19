const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");



const app = express();
const PORT = process.env.PORT || 2434;

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)

const connectToDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit on failure
    }
  };

  //connect to server
  
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
    connectToDB();
    
});