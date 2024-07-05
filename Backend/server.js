const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routes/UserRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

const MONGODB_URI = "mongodb://localhost:27017/SocialMedia";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase connected"))
  .catch((err) => console.error("DataBase connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
