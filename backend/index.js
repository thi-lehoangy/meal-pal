const express = require('express')
const csv = require('csv');
const app = express()
const port = 3000

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST, PUT");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

var obj = csv();

function foodItems(n0,date,itemName,mealTime,vegan,vegetarian,smartChoice,local,organic,sustainableSeafood,madeWithoutGluten,halal
  ) {
  this.n0 = n0;
  this.date = date;
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

const allFoodItems = []; 

// This should be imported from the front-end
const filter = {
  vegan: "1",
  vegetarian: "1",
  // smartChoice: "1",
  // local: "1",
  // organic: "1",
  // sustainableSeafood: "1",
  // madeWithoutGluten: "1",
  // halal: "1",
}


obj.from.path('./final.csv').to.array(function (data) {
    for (var index = 1; index < data.length; index++) {
        allFoodItems.push(new foodItems(data[index][0], data[index][1], data[index][2], data[index][3], data[index][4], data[index][5], data[index][6], data[index][7], data[index][8], data[index][9], data[index][10]));
    }
});

app.get('/', (req, res) => {
  res.send(JSON.stringify(foodItems))
})

app.get('/getItems', (req, res) => {
  // res.send(allFoodItemsByRestrictions)
  const mealTime = req.params.mealTime;
  res.send(allFoodItems.filter(item => {
    for (let key in filter) {
      if (item[key] == undefined || item[key] != filter[key]) {
        return false
      }
    }
    return true;
  }))
})

app.get('/getFoodItems/:mealTime', (req, res) => {
  const mealTime = req.params.mealTime;
  res.send(allFoodItems.filter(item => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  }))
  // res.send(allFoodItems.filter(item => item.mealTime == mealTime))
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})