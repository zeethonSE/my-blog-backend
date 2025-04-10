import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 10000;

//frontend hitting the server
app.use((req, res, next) => {
  console.log("Origin:", req.headers.origin);
  next();
});

app.use(cors({
  origin: "https://frontend-iota-sable.vercel.app",
}));

// ✅ Use the imported `postRoutes`
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Blog API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
