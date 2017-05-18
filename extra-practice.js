$(document).ready(function(){
	console.log("extra-practice")
$('#hobbies-button').css('color','hotpink')
// $('#main-wrapper').css('background-color','green')
	$('#CNN').click(function(){
		window.location= 'http://www.cnn.com/';
	});
		$('#CNBC').click(function(){
		window.location= 'http://www.cnbc.com/';
	});
			$('#FOX').click(function(){
		window.location= 'http://www.foxnews.com/';
	});
				$('#MSNBC').click(function(){
		window.location= 'http://www.msnbc.com/';
	});
				$('#news-button').css({
					'font-size':'medium',
					'font-weight':'bold',
					'color':'blue'
				});

});