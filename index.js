import express from "express";
import router from "./src/routes/index.js";
import cors from "cors";
import connectDB from "./src/common/configs/db.js";
import { HOST, PORT } from "./src/common/configs/environments.js";

connectDB();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
