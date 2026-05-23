import express from 'express'; //import

const app = express();  //execute

// Route
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

app.get("/about", (req, res) => {
    const name = req.query.name;
    if(name){
        res.send(`Welcome ${name}`);
    }
    else {
        res.send("About Screen");
    }
})



app.listen(3000, () => {
    console.log("Server Started Successfully");
})
