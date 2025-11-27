const express = require ("express");
const app = express();


app.get("/weather/:city",(req,res)=>{
    const city = req.params.city;
    res.send(`The weather of ${city} is sunny`);
});

const port = process.env.port  || 3000;
app.listen(port, () => {
    console.log("Server running on http://localhost:3000");
});