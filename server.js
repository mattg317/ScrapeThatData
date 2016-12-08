// depenecnies===============

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs  = require('express-handlebars');
var request = require("request");

var app = express();

app.use(express.static("public"));

var cheerio = require("cheerio");
//Mongo Database======================\
var mongojs = require('mongojs');
var databaseUrl = 'uproxx';
var collections = ["scrapedData"]

//Setting config to DB
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
})

//=====================================
app.get('/', function(req, res) {
  res.send('hello world');
});



// console.log("\n******************************************\n" +
//             "Scraping that data!!!!\n" +
//             "from Uproxx:" +
//             "\n******************************************\n");

// request("https://www.uproxx.com/", function(error, response, html){


// 	var $ = cheerio.load(html);

// 	var results = [];

// 	$("div.story").each(function(i, element) {

// 		var title = $(this).find('h2').find('a').text();
// 		var link = $(element).find("h2").find('a').attr("href")

// 	if (title && link) {
//         // save the data in the scrapedData db
//         db.scrapedData.save({
//           title: title,
//           link: link
//         }, 
//         function(err, saved) {

//           if (err) {
         	
//          	console.log(err);
//           }  
//           else {
            
//             console.log(saved);
//             console.log('done')
//           }
//         });
//       }
//     });
// 	//console.log(results);
// 	console.log("Scraped");
// });

app.get("/all", function(req, res){

	db.scrapedData.find({}, function(error, found){
		if(error){
			console.log(error)
		}
		else{
			res.json(found)
		}
	})
})




// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

