$(document).ready(function(){


	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		navText:'<>',
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	})


	$('#form-contato .form-control').focus(function(e){
		var idElement = e.target['name'];

		$('#'+idElement).css('font-size','14px');
		$('#'+idElement).css('top','-15px');
		$('#'+idElement).css('color','#d11518');
	});

	$('#form-contato .form-control').focusout(function(e){

		var idElement = e.target['name'];

		var inputValue = e.target['value'];

		if(inputValue == ""){
			$('#'+idElement).css('font-size','16px');
			$('#'+idElement).css('top','8px');
			$('#'+idElement).css('color','white');
		}
		
	});

	$(window).scroll(function(){

		if($(window).scrollTop() > 15){
			console.log('maior');
			$('.navbar').addClass('active-nav');
			$('.navbar a').addClass('active-nav');
			$('.divider').css('background-color','black');
		}
		else{
			console.log('menor');
			$('.navbar').removeClass('active-nav');
			$('.navbar a').removeClass('active-nav');
			$('.divider').css('background-color','#d11518');
		}
	});

});