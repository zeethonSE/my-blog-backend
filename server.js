import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origin.includes("vercel.app")) {
      // Allow any Vercel-originated frontend
      callback(null, true);
    } else {
      // Deny requests from non-Vercel origins (for security)
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 10000;

//frontend hitting the server
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Use the imported `postRoutes`
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
