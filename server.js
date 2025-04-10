import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(express.json());

const cors = require("cors");

const allowedOrigins = [
  "https://frontend-iota-sable.vercel.app",        // replace with your domain
  /\.vercel\.app$/,                                 // allow preview deployments
  "http://localhost:5173",                          // dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.some(o => {
      if (typeof o === 'string') return o === origin;
      return o instanceof RegExp && o.test(origin);
    })) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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
