import  express  from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    const today = new Date();
    const dayOfWeek = today.getDay();

    let type="WeekDay";
    let adv="Its time to work hard!!";
    
    if(dayOfWeek ===0 || dayOfWeek===6){
        let type="Weekend";
        let adv="Its time for some fun:)";
    };


    res.render("index.ejs",{
        day:type,
        advice: adv
    });
});
app.listen(port,() =>{
    console.log(`The server is running at port ${port}`);
});