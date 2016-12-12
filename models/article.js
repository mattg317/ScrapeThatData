var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

	title:{
		type: String,
		unique: true
	},
	link:{
		type: String
	},
	comments:{
		type: []
	}
});

var Article = mongoose.model("Article", ArticleSchema)
module.exports = Article;