import fetch from "node-fetch";
import cheerio from "cheerio";
import jsonframe from "jsonframe-cheerio";
import fs from "fs";

// function to get the raw data
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};

// URL for data
const URL = "https://www.aritzia.com/en/cart";
const email="emilyylin17@gmail.com";
const password="procart2021";
const login_url = "https://www.aritzia.com/en/my-account";

// start of the program
const getAmazonCart = async () => {
   const rawAmazonCartData = await getRawData(URL);

   //parsing the data
   const parsedAmazonCartData = cheerio.load(rawAmazonCartData);
   jsonframe(parsedAmazonCartData);

   //Supposed to print out the name of the article of clothing
   console.log(parsedAmazonCartData("div.w-third-l.mb3pr4.border-box").find("span.db.ttu-fr.ttc").text());

   // //Prints out My Bag
   // console.log(parsedAmazonCartData(".ar-cart").find("h5.f2").text());

    console.log(parsedAmazonCartData("div.pt2").find("a.ar-link").text());

}

getAmazonCart();
