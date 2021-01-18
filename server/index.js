import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/rides.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Prefix /post to routes
app.use("/rides", postRoutes);

// TODO: Update creds from secret file
const CONNECTION_URL =
  "mongodb+srv://server-app:" +
  process.env.MONGODBPASSWD +
  "@cluster0.x9aft.mongodb.net/fake-strava?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
