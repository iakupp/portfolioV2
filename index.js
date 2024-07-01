import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const domain = "https//www.impresse.sk";
app.set('view engine', 'ejs')

const username = "impresse";
const password = "jakubko33";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req,res) =>{
    res.render("form",{});
});

app.post("/home", (req,res) => {
    const userInputName = req.body.username;
    const userInputPass = req.body.password;
    if(userInputName == username && userInputPass == password){
        res.render("main");
    }
    else{
        res.status(404).send("Opps wrong input!")
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;