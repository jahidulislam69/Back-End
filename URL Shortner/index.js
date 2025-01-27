import express, { application } from "express";
import path from "path";
import connectToMongoDB from "./Connect.js";
import URL from "./Models/model.js"
import cookieParser from 'cookie-parser';
import { restrictToLoggedinUserOnly, checkAuth} from "./middlewares/auth.js"



import urlRoute from "./Routes/urlRoute.js"; // Add .js extension for ES modules
import staticRoute from "./Routes/staticRouter.js"
import userRoute from "./Routes/user.js"


const app = express();
const PORT = 8001;

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))



connectToMongoDB("mongodb+srv://jahidulhassa777:98904544@cluster0.ofn1q.mongodb.net/shortUrl")
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// app.get("/test", async (req, res) =>{
//     const allUrls = await URL.find({});
//     return res.render('home', {
//         urls: allUrls,
//     })
// })
app.use('/',checkAuth, staticRoute);
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use('/user', userRoute);


app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        { shortID: shortID },
        {
            $push: {
                visitHistory: {
                    timestamps: Date.now()
                }
            },
        }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(entry.redirectUrl);
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));