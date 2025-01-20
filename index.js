
// In this project we learn about the
// 1) Dynamic Routing
// 2) How to get data comming from the frontend at backend route
// 3)setting up parsers for form
// 4)Setting up ejs for the ejs page
// 5)setting up public static file

//mini Project Start
const express=require('express')  // we require the express

const app=express(); // we create the app in which all the express is put
const path=require('path'); // We takr the path module for the ejs page 

app.use(express.json());                     // These to are used to handle the form from the forntend
app.use(express.urlencoded({extend:true}));  // these are called parser for form

// The meaning of this is for using the css images and javascript which is used for forntend
// below code say us that if the request send from the fortend and for statict file search here vanna ko lagi you code lekhy ho 
// arko kura static file ko lagi yo public bala path ma khoj vannu ho 
app.use(express.static(path.join(__dirname, 'public'))); 

app.set('view engine', 'ejs') //It is for ejs page rendercko lagi. this code is for the ejs page so ejs page are the page which look likes the html but it perform the calculation eg.<h1>2+2</h1> can print 4 in page 

app.get('/',function(req, res){
    res.render("index");      // now this code is for ejs page if we go to the '/' vanya route then we render to the page of file creating inside the viewa folder
});


// Here we create the dynamic routing by adding the :username infornt of the change hunya route
//here colon means that colon paxi ko jo part xa tyo dynamic ho vanyara 
// (:) lai chai hami req.params vanxau means colon ko agaadi k xa vanya ho ani username vanya chai auta varible ko jasto act garxa
// user lay jun route fortend bata request garyo tyo username ma basxa ani ani req.params.username lay server or backend bata tei response garxa .
// vanya paxi frotend bata j req garyo teii nai backend bata response aauxa 
app.get('/profile/:username', function(req, res){   
      res.send(req.params.username);
    //  res.send(`welcome,${req.params.username}` ); // to get this output welcome username j enter garya xau tei
 });

// For Two dyanamic route
app.get('/author/:username/:age', function(req, res){    // dynamic route create garda hami lay first ma dynamic route lai chinnu paryo
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`); //jo route lai change garda error aaudai xa tei hunxa dyanamic route
});

app.listen(3000, ()=>{
    console.log("its running");
})