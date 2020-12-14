jQuery(document).ready(function(){  

	//STICKY MENU		
	var stickyNavPos = jQuery('header').offset();
	var stickyNavTop = stickyNavPos.top;

	var stickyNav = function(){

		var scrollTop = jQuery(window).scrollTop();		

		if (scrollTop >= stickyNavTop) { 
			jQuery('header').addClass('sticky');
		} else {
			jQuery('header').removeClass('sticky');
		}
	};

	stickyNav();
	jQuery(window).on('scroll',function() {
		stickyNav();
	});
	
	//MOBILE MENU
	
	var menuIcon = jQuery('.menuIcon');
	
	menuIcon.on('click',function(){		
		
		var menu = jQuery('.menu');
		
		if(menu.hasClass('menu-mobile')){				
			menu.removeClass('menu-mobile');
			menu.hide();
		}
		else {
			menu.addClass('menu-mobile').slideDown();			
		}
		
	});
	

	//SLIDER - ZMIANA SLIDE'ÓW
	
	var index = 1;
	
	var prevBtn = jQuery('.leftArrow');
	console.log(prevBtn);
	
	
	var nextBtn = jQuery('.rightArrow');
	console.log(nextBtn);
	
	var slide1 = jQuery('.slide1');
	console.log(slide1);
	var slide2 = jQuery('.slide2');
	var slide3 = jQuery('.slide3');
	
	var dot1 = jQuery('.dot-1');
	var dot2 = jQuery('.dot-2');
	var dot3 = jQuery('.dot-3');
	
	nextBtn.on('click',function(){
		
		if(index<3){
			index++;
		}
		console.log(index);
		
		if(index==2){
			slide2.css('display','inline');
			slide1.css('display','none');
			
			dot2.css('background-color','white');
			dot1.css('background-color','transparent');
		}
		
		else if (index==3){
			slide3.css('display','inline');
			slide2.css('display','none');
			slide1.css('display','none');
			
			dot3.css('background-color','white');
			dot2.css('background-color','none');
			dot1.css('background-color','transparent');
		}
		
	
	});
	
	prevBtn.on('click', function(){
		if(index>1){
			index--;
		}
		console.log(index);
		
		if(index==1){
			slide2.css('display','none');
			slide1.css('display','inline');
			
			dot2.css('background-color','none');
			dot1.css('background-color','white');
		}
		
		else if (index==2){
			slide3.css('display','none');
			slide2.css('display','inline');
			slide1.css('display','none');
			
			dot3.css('background-color','none');
			dot2.css('background-color','white');
			dot1.css('background-color','transparent');
			
		}
		
	});
	
	//MENU LINKI - PRZEKIEROWANIE DO DANYCH SEKCJI STRONY
	
	var getA= jQuery('.menu').find('a');	
	
	getA.on('mouseover', function(){		
		var border = jQuery(this).css('border-bottom','3px solid #7eab14');		
	});
	
	getA.on('mouseout', function(){		
		var border = jQuery(this).css('border-bottom','0');		
	});
	
	    getA.on('click',function(){
        var id = jQuery(this).attr('href');
       	var elemOffset = jQuery(id).offset();			
		var elemOffsetTop = elemOffset.top	
		
        jQuery('html, body').animate({scrollTop: elemOffsetTop - 150 }, 1000);            
    }); 
	
	// BUTTON NA SLIDERZE - PRZEKIEROWANIE DO OFERTY
	var sliderBtn= jQuery('.sliderBtn').find('a');		
	
	    sliderBtn.on('click',function(){
        var sliderId = jQuery(this).attr('href');
			
       	var elemOffsetSlider = jQuery(sliderId).offset();		
			
		var elemOffsetSliderTop = elemOffsetSlider.top			
		
        jQuery('html, body').animate({scrollTop: elemOffsetSliderTop - 150}, 1000);            
    }); 	
	
	
	//OFERTA - poruszanie się po zakładkach
	
	var getTab = jQuery('.tabRow1').find('a');
	
	getTab.on('click',function(e){			
		var currentAttrValue = jQuery(this).attr('href');		
		
	  	jQuery('.offerTab ' + currentAttrValue).show().siblings().hide();		
		
		getTab.removeClass('tab-active');
		jQuery(this).addClass('tab-active');	
		
		e.preventDefault();		
		
	});
	
	//ROZWIJANIE OFERTY W MOBILE
	
	var offerArrow = jQuery('.boxContent div:first-child');	
	
	offerArrow.on('click',function(){		
		
		var arrowContent = jQuery(this).next();			
		
		if (jQuery(this).hasClass('arrowUp')) {
			
			jQuery(this).removeClass('arrowUp')
			
			arrowContent.find('h3').slideUp();
			arrowContent.find('ul').slideUp();
			arrowContent.find('p').slideUp();
		}
		else {
			jQuery(this).addClass('arrowUp');
			
			arrowContent.find('h3').slideDown();
			arrowContent.find('ul').slideDown();
			arrowContent.find('p').slideDown();
		}
	});
	
	//OTWIERANIE OKIEN OFERTOWYCH	
		
	var offerBtn1 =jQuery('.offerBtn-1');
	var offerBtn2 =jQuery('.offerBtn-2');
	var offerBtn3 =jQuery('.offerBtn-3');
	var offerBtn4 =jQuery('.offerBtn-4');
	
	
	var showBox1 = jQuery('.showBox-1');
	var showBox2 = jQuery('.showBox-2');
	var showBox3 = jQuery('.showBox-3');
	var showBox4 = jQuery('.showBox-4');	
	
	var box1 = jQuery('.sec4box1img');
	var box2 = jQuery('.sec4box2img');
	var box3 = jQuery('.sec4box3img');
	var box4 = jQuery('.sec4box4img');
	

    offerBtn1.on('click', function() {			
		showBox1.slideDown();			
		var box1offset = box1.offset();				
		var box1offsetTop = box1offset.top;			
		showBox1.css('top', box1offsetTop);		
	}); 
	
	 offerBtn2.on('click', function() {			
		showBox2.slideDown();			 
		var box2offset = box2.offset();		
		var box2offsetTop = box2offset.top;				
		showBox2.css('top', box2offsetTop);
		
	}); 
	
	 offerBtn3.on('click', function() {			
		showBox3.slideDown();		
		var box3offset = box3.offset();		
		var box3offsetTop = box3offset.top;			
		showBox3.css('top', box3offsetTop);
		
	}); 
	
	 offerBtn4.on('click', function() {			
		showBox4.slideDown();		 
		var box4offset  = box4.offset();		
		var box4offsetTop = box4offset.top;			
		showBox4.css('top', box4offsetTop);	
	}); 
	
	//ZAMYKANIE OKIEN OFERTOWYCH
	
	var close = jQuery('.close');	
	close.on('click', function(){
		showBox1.slideUp();
		showBox2.slideUp();
		showBox3.slideUp();
		showBox4.slideUp();		
	});   
});