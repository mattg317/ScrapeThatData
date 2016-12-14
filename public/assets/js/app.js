console.log('working')

var i = 0


function displayArticle(){
	$.getJSON("/all", function(data){
		$(".title").text(data[i].title)
		//$(".link").attr('href', data[1].link)
		$(".link").attr('href', data[i].link).text(data[i].link)
		// for(var j=0, n=data[i].comments.length; j<n; j++){
		// 	console.log(data[i].comments[j].comment)
		// 	var discomm = data[i].comments[j].comment;
		// 	$(".comments").append($("p").text(discomm));
		// }
		$('.comments').text(data[i].comments[0].comment)
		console.log('we here')
		console.log(data[i].title)
		console.log(data[i].link)
	})
}


// essentially need a function that dipslay one. When next is click it increase by one
displayArticle()

$("#next").on("click", function(){
	i++
	displayArticle();
})

$("#previous").on('click', function(){
	i--
	displayArticle();
})

