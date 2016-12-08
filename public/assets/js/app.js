console.log('working')

var i = 0


function displayArticle(){
	$.getJSON("/all", function(data){
		$(".title").text(data[i].title)
		//$(".link").attr('href', data[1].link)
		$(".link").attr('href', data[i].link).text(data[i].link)
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