var dog, sadDog, happyDog, database;
var foodS, foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here
var feed, lastFeed

function preload() {
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  foodObj = new Food();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  //create feed the dog button here

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46, 139, 87);
  foodObj.display();

  //write code to read fedtime value from the database 

  feedtime() 
    var feedtimeRef = database.ref('feedtime');
    feedtimeRef.on("value", function (data) {
      feedtime = data.val();
    })
  
    if (lastFeed >= 12) {
      feedtime
    } else if (lastFeed == 0) {
      text("last  Feed : 12 AM", 350, 30);
  
    } else {
      
    }
  }


  //write code to display text lastFed time here





//function to read food Stock
function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog() {
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time
  if (food_stock_val <= 0) {
    foodObj.updateFoodStock(food_stock_val * 0);
  } else {
    foodObj.updateFoodStock(food_stock_val - 1);
  }

//function to add food in stock
var food_stock_val = foodObj.getFoodStock();



function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
  drawSprites();
}}
