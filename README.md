# my-blog-backend

This is the backend for the My Blog project. It is built using **Node.js** and **Express.js**.

## Features
- Create, read, update, and delete (CRUD) blog posts
- API endpoints for managing blog content
- Uses JSON as a lightweight database

## 📁 Folder Structure
.  ├── routes 
      └── posts.js
   ├── index.js
   └── package.json

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/zeethonSE/my-blog-backend.git
   cd blog-backend

2. Install dependencies:
   npm install

3. (Optional) Create a .env file if needed for custom configuration
   (e.g. PORT=5000)

4. Start the server:
   node index.js

## 🌐 API Endpoints
Method	Endpoint	Description
GET	/posts	Get all blog posts
GET	/posts/:id	Get a single post by ID
POST	/posts/new-post Create a new post
PUT	/posts/:id	Update an existing post
DELETE	/posts/:id	Delete a post

## 🔐 CORS
Only allows requests from:
origin: "https://frontend-iota-sable.vercel.app"
You can update this in index.js as needed.

## ✅ To Do
   Add database support
   Implement user authentication
   Use dotenv config more effectively
   
---









