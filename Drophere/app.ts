import express from 'express';
import { createWriteStream } from "fs";

const app = express();
const route = express.Router()


app.use((req, res, next) => {
    console.log(req.url);
    next();
});

route.post("/share", (req, res) => {
    const filename = req.query.f;
    console.log(filename);
    const writeStream = createWriteStream(`/Users/Abhishek/Desktop/${filename}`, {
        encoding: "binary",
    });
    req.on("data", (chunk) => writeStream.write(chunk));
    writeStream.on("ready", () => {
        console.log("Writing")
    })
    writeStream.on("open", (fd) => {
        console.log(fd);
    })
    res.send({
        response: "Uploaded"
    });
});

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
});




app.use(route);




app.listen(5000, () => {
    console.log("Server started on Port 5000");
});