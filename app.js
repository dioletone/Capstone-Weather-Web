import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
 const app = express();
 const port =3000;
 const weatherData = [
    {BASE_URL:`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`,
    APIkey:"1057587979b5982dbffdabd735a4bef6",
    GEO_URL:`http://api.openweathermap.org/geo/1.0/direct?q=${cityname},${statecode},${countrycode}&appid=`,
}
 ]
 var lat = 0, lon = 0 ,cityname="", statecode=0,countrycode=0;
 
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("../views/page/index.ejs")
})

 app.listen(port,()=>{
    console.log(`Listening on ${port}`);
 })
