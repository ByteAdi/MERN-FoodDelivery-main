const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/SAASDevelopers";



const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async (err, data) => {
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(async function(err, catData){
          if (err) {
              console.log(err)
          }
          else {
              global.food_items = data;
              global.foodCategory = catData;
          };
      })

    //   if (err) {
    //     console.log(err);
    //   } else {
    //     global.food_items = data;
    //   }

    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongodb;
