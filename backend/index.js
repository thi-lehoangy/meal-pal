const express = require('express')
const app = express()
const port = 3000

const csv = require('csv');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST, PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// loads the csv module referenced above.

var obj = csv(); 
// gets the csv module to access the required functionality

function MyCSV(n0,itemName,mealTime,vegan,vegetarian,smartChoice,local,organic,sustainableSeafood,madeWithoutGluten,halal
  ) {
  this.n0 = n0;
  this.itemName = itemName;
  this.mealTime = mealTime;
  this.vegan = vegan;
  this.vegetarian = vegetarian;
  this.smartChoice = smartChoice;
  this.local = local;
  this.organic = organic;
  this.sustainableSeafood = sustainableSeafood;
  this.madeWithoutGluten = madeWithoutGluten;
  this.halal = halal;
}; 

var MyData = []; 
// MyData array will contain the data from the CSV file and it will be sent to the clients request over HTTP. 


obj.from.path('./services/today.csv').to.array(function (data) {
    for (var index = 1; index < data.length; index++) {
        MyData.push(new MyCSV(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4], data[index][5], data[index][6], data[index][7], data[index][8], data[index][9], data[index][10]));
    }
});
//Reads the CSV file from the path you specify, and the data is stored in the array we specified using callback function.  This function iterates through an array and each line from the CSV file will be pushed as a record to another array called MyData , and logs the data into the console to ensure it worked.

app.get('/', (req, res) => {
  res.send(JSON.stringify(MyData))
})

// breakfast, continental, brunch, lunch, liteLunch, dinner, lateDinner, lateNight

app.get('/get/:mealTime', (req, res) => {
  const mealTime = req.params.mealTime;
  res.send(MyData.filter(item => item.mealTime == mealTime))
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})