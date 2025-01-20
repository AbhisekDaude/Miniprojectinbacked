
// In this project we learn about the
// 1) Dynamic Routing
// 2) How to get data comming from the frontend at backend route
// 3)setting up parsers for form
// 4)Setting up ejs for the ejs page
// 5)setting up public static file

//mini Project Start
const express=require('express')  // we require the express

const app=express(); // we create the app in which all the express is put
const path=require('path'); // we require the path for the 

app.use(express.json());                     // These to are used to handle the form from the forntend
app.use(express.urlencoded({extend:true}));  // these are called parser for form

// The meaning of this is for using the css images and javascript which is used for forntend
// below code say us that if the request send from the fortend and for statict file search here vanna ko lagi you code lekhy ho 
// arko kura static file ko lagi yo public bala path ma khoj vannu ho 
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs') // this code is for the ejs page so ejs page are the page which look likes the html but it perform the calculation eg.<h1>2+2</h1> can print 4 in page 

app.get('/',function(req, res){
    res.render("index");      // now this code is for ejs page if we go to the '/' vanya route then we render to the page of file creating inside the viewa folder
})
app.listen(3000, ()=>{
    console.log("its running");
})