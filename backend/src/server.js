import express from 'express';
import cors from "cors";
import dotenv from"dotenv";

import rateLimiter from "./middleware/rateLimiter.js";
import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;


//middleware, auth check is best example
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);  
// cors needs to be above the rateLimiter

app.use(express.json()),
app.use(rateLimiter) 

//this middleware will parse JSON bodies: req.body
// our simple custome middleware

// app.use((req,res,next) => {
//     console.log (`Req method is ${req.method} & ReqURL is ${req.url}`);
//     next();      // next funtion is calling the getAllNotes function in the notesRoutes.js file
// });


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on PORT', PORT);
    });
});



// mongodb+srv://inorileywin_db_user:Vls0pATvUokp06F4@cluster0.7eazbl4.mongodb.net/?appName=Cluster0