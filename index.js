const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

//ALWIN CHANGES

app.get('/fetch',  async (req, res) => {

    const city = req.query.city;
    try{
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f2f03414e020ca4ef2fced0ae32302b1`);
        const data = result.data;
        console.log(result);
        const info = {
            "city" : data.name,   
            "temp" : data.main.temp,
            "max" : data.main.temp_max,
            "min" : data.main.temp_min,
            "type" : data.weather[0].main,
            "status" : result.status,
            "today" : result.headers.date
        }
        
        res.send(info);
    }
    catch(err){
        const info = {
            "city" : "",
            "temp" : "",
            "max" : "",
            "min" : "",
            "type" : "",
            "status" : 200
        }
        res.send()
    }

    

})

app.listen(5000);