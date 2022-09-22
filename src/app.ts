import dotenv from "dotenv";
dotenv.config();
import express, {Application, Request, Response, NextFunction} from "express";
import path from "path";
// local imports
import devloperRouter from "./routes/devloper";
import photographerRouter from "./routes/photographer";

const PORT = process.env.SERVER_PORT;

const app: Application = express();

//json support
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//searve static files
app.use(express.static(path.join(__dirname, "public")));

//home route
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render("index");
});

//dev route
app.use("/dev", devloperRouter);
//photographer route
app.use("/photographer", photographerRouter);

async function start() {
    try {
        await connectDB("mongodb://localhost:27017/express-mongo");
        app.listen(PORT, () => {
            console.log("Server is running in port " + PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

start();

function connectDB(URI: string) {
    console.log("Database not connected yet...");  
}
