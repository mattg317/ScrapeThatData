// depenecnies===============

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs  = require('express-handlebars');
var request = require("request");
var Promise = require("bluebird");

mongoose.Promise = Promise;

//Models=======
var Article = require("./models/article.js")

//initilaize Express======
var app = express();

app.use(express.static("public"));

//Web Scraper
var cheerio = require("cheerio");

//Mongo Database======================\
mongoose.connect("mongodb://localhost/articleScraper")
var db = mongoose.connection;
// var databaseUrl = 'articleScraper';
// var collections = ["scrapedData"]

//Any Mongoose Errors
db.on("error", function(error){
	console.log("Mongoose Error: ", error);
});

db.once("open", function(){
	console.log("Mongoose connection successful.");
})

var articleLibrary = new Article({
	name: "Scraped Articles"
});

articleLibrary.save(function(error, doc){
	if(error){
		console.log(error);
	}
	else{
		console.log(doc)
	}
})

//=====================================
app.get('/hello', function(req, res) {
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
//         // db.scrapedData.save({
//         //   title: title,
//         //   link: link
//         // }, 
//         var newArticle = new Article({
//         	title: title,
//         	link: link
//         });
//         newArticle.save(function(err, doc){
//         	if(err){
//         		console.log(err)
//         	}
//         	else{
//         		console.log(doc);
//         	}
//         })
//       }
//     });
// 	//console.log(results);
// 	console.log("Scraped");
// });

app.get("/all", function(req, res){

	Article.find({}, function(error, doc){
		if(error){
			res.send(error);
		}
		else{
			res.send(doc)
		}
	})
})




// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

