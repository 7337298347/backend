import dotenv from "dotenv";
dotenv.config({ path: '../.env' }); // Adjust path if .env is in the backend folder

import db from './database/db.js';
import { app } from './app.js';

// Debugging lines to verify .env loading
console.log("DB_NAME:", process.env.DB_NAME); 
console.log("PORT:", process.env.PORT);       
console.log("MONGODB_URL:", process.env.MONGODB_URL);

db()
  .then(() => {
      app.listen(process.env.PORT || 8000, () => {
          console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
      });
  })
  .catch((err) => {
      console.log("MongoDB connection failed!", err);
  });
