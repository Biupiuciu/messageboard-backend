import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./src/routes/index";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log("Server is running");
});
