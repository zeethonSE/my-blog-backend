import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 10000;

import cors from "cors";

const allowedOrigins = [
  "https://frontend-iota-sable.vercel.app",
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

// ✅ Use the imported `postRoutes`
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
