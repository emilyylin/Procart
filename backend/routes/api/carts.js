const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const router = express.Router();

const validateItemInput = require("../../validation/addCart");

//Load Items Model
const Item = require("../../models/Cart");

router.post("/addCart", (req, res) => {
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
                num_items: req.body.num_items,
                owner_email: req.body.owner_email,
                date: req.body.date
            });
        }
    })

});

router.route("/").get(async(req, res) => {
    try {
        console.log("carts")
    } catch (err) {
        console.error(err);
    }
});

router.route("/getAll").get(async (req, res) => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const dbo = client.db("Procart");
        dbo.collection("carts").find({}).toArray(function (err, result) {
            res.json(result);
          });
      } catch (err) {
        console.error(err);
      }
});

router.route("/getCarts").post(async (req, res) => {
    try {
        const client = await MongoClient.connect(process.env.MONGO_URL);
        const dbo = client.db("Procart");
        dbo
          .collection("carts")
          .find({ name: req.body.id })
          .toArray(function (err, result) {
            res.json(result);
          });
      } catch (err) {
        console.log(err);
      }
});

module.exports = router;