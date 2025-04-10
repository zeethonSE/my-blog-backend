import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

const allowedOrigins = [
  "https://frontend-iota-sable.vercel.app", // ✅ Preferred stable domain
  "https://frontend-abubzk0g2-zeethons-projects.vercel.app",        // ✅ Temporary deployment domain (you can add more)
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like curl or postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

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
