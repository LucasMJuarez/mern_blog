import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();


//Middlewares
app.use(cors());
app.use(express.json({ limit:'30mb', extended: true }));
app.use(express.urlencoded({ limit:'30mb', extended: true }));


//Routes
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(proce.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
