let express = require('express');
let app = express();
let mongoose = require('mongoose');

let kitchenRoute = require('./routes/kitchen');


//DB connection
mongoose.connect('mongodb://ashish:ashish1@ds141188.mlab.com:41188/react_kitchen', { useNewUrlParser: true }, (err)=>{
  if (err) {
    console.log("Database is not connected");
  }
  else{console.log("Database is connected")}
});


//middleware
app.use(express.json());

//route middleware
app.use('/api/kitchen', kitchenRoute);


app.listen(5000, ()=>{
  console.log("server is listening 5000....");
});
