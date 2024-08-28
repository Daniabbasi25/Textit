import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";
import authMiddleware from "./middleware/authMiddleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json()); // Middleware to parse JSON
app.use("/api/auth", authRoutes); // Auth routes
app.use("/api/contacts", authMiddleware, contactRoutes); // Auth routes

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
