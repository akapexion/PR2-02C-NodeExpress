import express from 'express'; //import
import salaryLogic from './middlewares/salaryMiddleware.js';
import cors from 'cors';

// For specific Route
const route = express.Router();

const app = express();  //execute

// Route

// app.use(salaryLogic);
route.use(salaryLogic);

app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello");
})


app.get("/abc", (req, res) => {
    res.send("Hello");
})

app.get("/def", (req, res) => {
    res.send("World");
})


app.get("/api", (req, res) => {
    res.send([
        {
            success: 202,
        }
    ])
})


app.get("/about", salaryLogic, (req, res) => {
    const name = req.query.name;
    if(name){
        res.send(`Welcome ${name}`);
    }
    else {
        res.send("About Screen");
    }
})

// params property

app.get("/farooq/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Item ID is: ${id}`);
})


app.listen(3000, () => {
    console.log("Server Started Successfully");
})
