const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/TerraLoom";

main()
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68ca54c24cba1934d5ac6132",
  }));
  await listing.insertMany(initData.data);
  console.log("Data was initilaized!");
};

initDB();
