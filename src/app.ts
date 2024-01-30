import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send(`The API is at http://localhost:${app.get("port")}`);
});

export default app;
