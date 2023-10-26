import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app=express();
const port=3000;
var date=new Date();
const day=date.getDay();
const month=date.getMonth();
const datee=date.getDate();
var d1="",d2="";
app.use(bodyParser.urlencoded({ extended: true }));
switch (month){
case 0:
    d1="January";
    break;
case 1:
        d1="february";
        break;
case 2:
    d1="march";
    break;
case 3:
    d1="april";
    break;
case 4:
    d1="may";
    break;
case 5:
    d1="June";
    break;
case 6:
    d1="July";
    break;
case 7:
    d1="August";
    break;
case 8:
    d1="September";
    break;
case 9:
    d1="October";
    break;
case 10:
    d1="November";
    break;
case 11:
    d1="December";
    break;
default:
    break;
}

switch(day){
    case 0:
        d2="Sunday";
        break;
    case 1:
        d2="Monday";
        break;
    case 2:
        d2="Tuesday";
        break;
    case 3:
        d2="Wednesday";
        break;
    case 4:
        d2="Thrusday";
        break;
    case 5:
        d2="Friday";
        break;
    case 6:
        d2="Saturday";
        break;
    default:
        break;
}
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/To-do-list");
}
const items=[];
app.get("/",(req,res)=>{
res.render("index.ejs",{
    items,
    v1:d1,
    v2:d2,
    d:datee,
});
});

app.post("/",(req,res)=>{
    const va=req.body.newitem;
items.push(va);
 res.render("index.ejs",{
    items: items,
   v1:d1,
    v2:d2,
    d:datee,
 });
});

const work_items=[];
app.get("/work",(req,res)=>{
    res.render("work.ejs",{
        items:work_items,
        v1:d1,
        v2:d2,
        d:datee,
    });
    });

app.post("/work",(req,res)=>{
    const va=req.body.newitem;
    work_items.push(va);
    res.render("work.ejs",{
       items: work_items,
      v1:d1,
       v2:d2,
       d:datee,
    });
});
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})