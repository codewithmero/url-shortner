import dotenv from 'dotenv';
dotenv.config({ path: './src/.env' });  
import { connectDB } from './db/index.js';
import app from './app.js';

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    })
  })
  .catch(err => {
    console.log("Error while connecting with the database:::", err);
  });