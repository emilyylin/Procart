const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const router = express.Router();

const validateItemInput = require("../../validation/addItem");

//Load Items Model
const Item = require("../../models/Item");

router.post("/addItem", (req, res) => {
    // // Form validation
    // const { errors, isValid } = validateItemInput(req.body);
    // // Check validation
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    Item.findOne({
        id:req.body.id
    }). then (item=> {
        if (item) {
            return res.status(400).json({id: "Id Already Exists"});
        } else {
            const newItem = new Item ({
                id: req.body.id,
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                url: req.body.url,
                cart_id: req.body.id,
                date: req.body.date
            });
        }
    })

});

router.route("/").get(async(req, res) => {
    try {
        console.log("items")
    } catch (err) {
        console.error(err);
    }
});

router.route("/getAll").get(async (req, res) => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const dbo = client.db("Procart");
        dbo.collection("items").find({}).toArray(function (err, result) {
            res.json(result);
          });
      } catch (err) {
        console.error(err);
      }
});

router.route("/getItems").post(async (req, res) => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const dbo = client.db("Procart");
        dbo
          .collection("items")
          .find({ name: req.body.id })
          .toArray(function (err, result) {
            res.json(result);
          });
      } catch (err) {
        console.log(err);
      }
});

module.exports = router;