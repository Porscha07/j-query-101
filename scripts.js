// jQuery 101
// console.log(Test);
// console.dir(document);
// var dom = $(document);
// console.dir(dom);
// console.dir($) or console.dir(window.$) or console.dir(jQuery) or console.dir(window.jQuery)
// 1.Wait until the document is fully loaded...i.e Ready..
// 2. Once the DOM is loaded, run the anon function

$(document).ready(function(){
	// javascript way of getting something called thing./same as below.
// var thing = document.getElementById('image');
// // way of using JQuery to target something using a css #
// var thing = $('#image'); 
// console.log(thing);
// //jquery way of targeting something in the DOM ($- target in jQuery)same as line 12,14same as 17)
// console.log(document.querySelector('#image'));
// var classthing = document.getElementsByClassName("thing");
// classThing = $('.thing');

// var body= document.getElementsByTagName('body');
// body= $('body');
// });


// 27 is javascript/ 31 is jquery
	// addEventListener.document.getElementsByTagName('button').on'click',function(){

	// })

	$('button').click(function(){
		// console.log("this");
		// console.log($(this).attr('toDo'));
		var whatToDo = $(this).attr('toDo');
		if(whatToDo == 'hide'){
			$('#thing').hide();
			document.getElementById('thing').style.display = 'none'
		}else if(whatToDo == 'show'){
			$('#thing').show();
		}else if (whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if(whatToDo == 'html'){
			// if you don't pass html an argument it will simply return inner html.
			console.log($('#thing').html());
			$('#thing').html('<strong>I am a new innerhtml.</strong>');
		}else if(whatToDo == 'text'){
			$('thing').text('<strong>I am a new innerhtml.</strong>');
		}else if(whatToDo == 'prepend'){
			$('#thing').prepend('<strong>I am new innerhtml.</strong>');
		}else if (whatToDo == 'append'){
			$('#thing').append('<strong>I am new innerhtml.</strong>');
		}else if(whatToDo == 'css'){
			$('thing').css({
				'color': 'orange',
				'font-size':'80px',
				'background-color': 'blue',
				'border-radius': '50%'
			});
		}else if (whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
		}else if (whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css');
		}
	
	});
});

// 1. wait until Absolutely everything has loaded(pictures, videos,etc )(good for resizing
// $(window).on("load", function(event){
// 	console.log("the window has loaded!")
// 	var thing = document.getElementById('thing');
// 	console.log(thing);

// });
