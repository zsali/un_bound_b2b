jQuery(document).ready(function($){

//=========removed image hover=========
	$('img[title]').each(function() { $(this).removeAttr('title'); });
//=========removed image hover=========
	
	wow = new WOW(
	              {
	              boxClass:     'wow',      // default
	              animateClass: 'animated', // default
	              offset:       0,          // default
	              mobile:       true,       // default
	              live:         true        // default
	            }
	        )
	wow.init();

//=========sticky menu js================
	 // $(window).scroll(function(){
   //      if ($(this).scrollTop() > 300) {
   //         $('header#masthead').addClass('sticky-menu');
   //      } else {
   //         $('header#masthead').removeClass('sticky-menu');
   //      }
   //  });


	// Hide header on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header#masthead').outerHeight();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    
		    // If scrolled down and past the navbar, add class .nav-up.
		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        $('header#masthead').removeClass('sticky-menu').addClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		        		if (st > 100) {
		            	$('header#masthead').removeClass('nav-up').addClass('sticky-menu');
		        		}else{
		        			$('header#masthead').removeClass('sticky-menu').removeClass('nav-up');
		        		}
		        }
		    }
		  
		    lastScrollTop = st;
		}
//=========sticky menu js================



	//=========testimonial slider===========
	$('#testimonial-slider').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
  		speed: 300,
		arrows: true,

	 	// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    	// nextArrow: '<button class="slide-arrow next-arrow"></button>'

		responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
	  		slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
	  		slidesToScroll: 1,
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

	});
		
	//=========testimonial slider===========

	//============review Slider==============
	$('#review-slider').slick({
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
  		speed: 300,
			arrows: true,
			dots: false,
	 	// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    	// nextArrow: '<button class="slide-arrow next-arrow"></button>'
	});

	$('.review-right').slick({
		  	infinite: true,
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
	  		speed: 300,
				arrows: false,
				autoplay: true,
				dots: true,
		 	// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
	    	// nextArrow: '<button class="slide-arrow next-arrow"></button>'
		});

	//============review Slider==============

	//============Our Client Slider==============
	$('#client-slider').slick({
	  	infinite: true,
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
  		speed: 3500,
			arrows: false,
			autoplay: true,
     	autoplaySpeed: 0,
     	pauseOnHover: false,
     	// variableWidth: true,
  		cssEase: 'linear',
  		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 4,
			  		slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 599,
		      settings: {
		        slidesToShow: 3,
			  		slidesToScroll: 1,
		      }
		    }
		  ]

	 	// prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    	// nextArrow: '<button class="slide-arrow next-arrow"></button>'
	});
	//============Our Client Slider==============

	//============search sections Slider==============
	$('.search-lists').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
  		speed: 300,
			arrows: true,
			autoplay: false,
			dots: false,
			responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
			  		slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 599,
		      settings: {
		        slidesToShow: 1,
			  		slidesToScroll: 1,
		      }
		    }
		  ]
	});
	//============search sections Slider==============


	//=========back-to-top button=========
	var btn = $('.back-top-top #button');

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 300) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});																																																		

	//=========back-to-top button=========


	//=========lead generation page counter js===========
	// var counterDiv = $(".lead-generation-counter");
	// $(window).on('scroll', function() {
	// 	 var scroll = $(window).scrollTop();
	// 	 if (scroll == counterDiv.offset().top ) {
	// 		increase_counter();
	// 	}
	// });


	// function increase_counter(){
	// $(window).scroll(function() {
	//    var hT = $('.home-graph-animation-3').offset().top,
	//        hH = $('.home-graph-animation-3').innerHeight(),
	//        wH = $(window).height(),
	//        wS = $(this).scrollTop();
	//    if (wS > (hT+hH-wH)){
	//    		increase_counter();
	//    }
	// });	
	
	// function increase_counter(){
	// 	$(".counter").find('.count').each(function () {
	// 	    $(this).prop('Counter',0).animate({
	// 	        Counter: $(this).text()
	// 	    }, {
	// 	        duration: 4000,
	// 	        easing: 'swing',
	// 	        step: function (now) {
	// 	            // $(this).text(Math.ceil(now));
	// 	           $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	// 	        }
	// 	    });
	// 	});	
	// }
	


	// }			

// ===========increase counter on scroll==============
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
	if($(".counter-section")[0]){  
	  if (isScrolledIntoView($(".counter-section")) && !viewed) {
	      viewed = true;
	      $('.count').each(function () {
	      $(this).prop('Counter',0).animate({
	          Counter: $(this).text()
	      }, {
	          duration: 4000,
	          easing: 'swing',
	          step: function (now) {
	              $(this).text(Math.ceil(now));
	              $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	          }
	      });
	    });
	  }
  }
}


//=============custom animation class=====================
 $(window).scroll(function() {
	 	// ======service one========
	 	if($(".home-service-1")[0]){
	 		if($(window).width() <= 767){
		  	var hT = $('.home-service-1').offset().top - 400;
		  }else{
		  	var hT = $('.home-service-1').offset().top;	
		  }	
		       hH = $('.home-service-1').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		   		$('.home-service-1').addClass("active");
		   		setInterval(function() {
		   		$('.home-service-1').addClass("active2");
				}, 2500);
		   }
		}   
		// ======service one========
		
		// ======service two======== 
		if($(".service-graph-sec-2")[0]){
			if($(window).width() <= 767){
		  	var hT = $('.service-graph-sec-2').offset().top - 400;
		  }else{
		  	var hT = $('.service-graph-sec-2').offset().top;
		  }	
		       hH = $('.service-graph-sec-2').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		   		$('.service-graph-sec-2').addClass("active");
		   }
		}
		// ======service two======== 
		// ======service two======== 
		if($(".home-graph-animation-3")[0]){
			if($(window).width() <= 767){
		  	var hT = $('.home-graph-animation-3').offset().top - 400;
		  }else{
		  	var hT = $('.home-graph-animation-3').offset().top;
		  }	
		       hH = $('.home-graph-animation-3').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		   		$('.home-graph-animation-3').addClass("active");
		   }
		}
		// ======service two========    
		   // ======service two======== 
		if($(".home-graph-animation-4")[0]){
			if($(window).width() <= 767){
		  	var hT = $('.home-graph-animation-4').offset().top - 400;
		  }else{
		  	var hT = $('.home-graph-animation-4').offset().top;
		  }	
		       hH = $('.home-graph-animation-4').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		   		$('.home-graph-animation-4').addClass("active");
		   }
		}
		// ======service two======== 
		if($(".bend-lead-sec")[0]){
			if($(window).width() <= 767){
		   	var hT = $('.bend-lead-sec').offset().top - 450;
		  }else{
		  	var hT = $('.bend-lead-sec').offset().top - 150;
		  } 	
		       hH = $('.bend-lead-sec').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
		   		$('.bend-lead-sec').addClass("active");
		   }
		} 
});




 //=============custom animation class=====================

// ===========increase counter on scroll==============



// =====animation on scroll add active class========
// =====animation on scroll add active class========
		//=========lead generation page counter js===========


	//=============lead generation js======================
		  // $('.leads-lists').each(function() {
		  //   const $imgArr = $(this).children();
		  //   $imgArr.eq(Math.floor(Math.random() * $imgArr.length)).show();
		  // });

		  // function changeImage() {
		  //     let $next;
		  //     const $liArr = $('.leads-lists');
		  //     const $currLi = $liArr.eq(Math.floor(Math.random() * $liArr.length));
		  //     const $currImg = $('.lead-item:visible', $currLi);
		  //     if ($currImg.next().length === 1) {
		  //         $next = $currImg.next();
		  //     } else {
		  //         $next = $('.lead-item:first', $currLi);
		  //     }
		  //     $currImg.fadeOut();
		  //     $next.fadeIn();
		  // }

		  // setInterval(() => {
		  //     changeImage();
		  // }, 3000);

	//=============lead generation js======================




//=========home graph bar animation==================

//=========home graph bar animation==================


//==============our team slider section====================
  $('#team-slider').slick({
    autoplay: true,
    arrows: false,
    speed: 0,
    dots: false,
    infinite: true,
	autoplaySpeed: 2000,
	slidesToShow: 3,
  	slidesToScroll: 3,
    // fade: true,
    cssEase: 'linear',
    touchThreshold: 100
  })
//==============our team slider section====================


//=========home audience circle chart=============
if(jQuery("body").hasClass("home")){  
  var dataset = [
  { name: "Direct", count: 1242 },
  { name: "Facebook", count: 2242 },
  { name: "Pinterest", count: 650 },
  { name: "Search", count: 650 },
  { name: "Others", count: 1450 },
];

var total = 0;

dataset.forEach(function (d) {
  total += d.count;
});

var pie = d3.layout
  .pie()
  .value(function (d) {
    return d.count;
  })
  .sort(null);

var w = 130,
  h = 130;

var outerRadiusArc = w / 2;
var innerRadiusArc = 33;
var shadowWidth = 10;



var color = d3.scale
  .ordinal()
  .range(["#F58634", "rgba(245, 134, 52, 0.75)", "rgba(245, 134, 52, 0.5)", "rgba(245, 134, 52, 0.25)", "rgba(245, 134, 52, 0.1)"]);


var svg = d3
  .select("#chart")
  .append("svg")
  .attr({
    width: w,
    height: h,
    class: "shadow",
  })
  .append("g")
  .attr({
    transform: "translate(" + w / 2 + "," + h / 2 + ")",
  });

var createChart = function (
  svg,
  outerRadius,
  innerRadius,
  fillFunction,
  className
) {
  var arc = d3.svg.arc().innerRadius(outerRadius).outerRadius(innerRadius);
    console.log(d3.svg.arc());
  var path = svg
    .selectAll("." + className)
    .data(pie(dataset))
    .enter()
    .append("path")
    .attr({
      class: className,
      d: arc,
      fill: fillFunction,
    });

  path
    .transition()
    .duration(3000)
    .attrTween("d", function (d) {
      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function (t) {
        return arc(interpolate(t));
      };
    });
};


$(window).scroll(function() {
	   var hT = $('.service-graph-sec-2').offset().top,
	       hH = $('.service-graph-sec-2').innerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH)){
			createChart(
			  svg,
			  outerRadiusArc,
			  innerRadiusArc,
			  function (d, i) {
			    return color(d.data.name);
			  },
			 'path1'
			);
		}
});

}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//=========home audience circle chart=============

//===========home fade effect js================	
 $('.leads-wrap .first-lead').slick({
   	draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });

 $('.leads-wrap .sec-lead').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 1000,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });

 $('.leads-wrap .third-lead').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 1500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  });
//===========home fade effect js================	


//=============career ajax feature onclick functionality===================
jQuery(".career-cat-lists").find("li").on("click", function(){
	jQuery(".loader-sec").show();
	let term_id = jQuery(this).data("id");

	jQuery(".career-cat-lists").find("li").removeClass("active");
	jQuery(this).addClass("active");
	career_category_ajax(term_id);
});
//=============career ajax feature onclick functionality===================


//===============career ajax on select option for mobile devices======================
jQuery(".mobile-career-cat").on("change", function(){
	var term_id = jQuery(this).find("option:selected").val();
	jQuery(".loader-sec").show();
	jQuery(".career-cat-lists").find("option").removeClass("active");
	jQuery(this).find("option:selected").addClass("active");
	career_category_ajax(term_id);
});	
//===============career ajax on select option for mobile devices======================


function career_category_ajax(term_id){
	$.ajax({
       type : "POST",
       dataType : "json",
       url : frontendajax.ajaxUrl,
       data : {action: "fetch_career_domain_post", term_id},
       success: function(response) {
       		setTimeout(function(){
         		jQuery(".loader-sec").hide();	
         		if(response.status == true){
							jQuery(".opening-sec-wrap").html(response.data);
							let toggles = document.getElementsByClassName("toggle");
							let contentDiv = document.getElementsByClassName("career-content");

							for (let i = 0; i < toggles.length; i++) {
							    toggles[i].addEventListener("click", () => {
							        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
							            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
							        } else {
							            contentDiv[i].style.height = "0px";
							        }

							        for (let j = 0; j < contentDiv.length; j++) {
							            if (j !== i) {
							                contentDiv[j].style.height = 0;
							            }
							        }
							    });
							}

							//=====================load more=========================
							jQuery(".career-opening-list > li").slice(0, 6).show();
							var elength = jQuery(".career-opening-list > li").length;
							if(elength > 6){
								jQuery(".career-list-sec").find(".load-more-btn").show();
							}else{
								jQuery(".career-list-sec").find(".load-more-btn").hide();
							}

							// jQuery("body").on('click', '.career-list-sec .load-more', function (e) {
							// 	e.preventDefault();
							// 	var __this = jQuery(this);
							// 	jQuery(".career-opening-list > li:hidden").slice(0, 6).slideDown();
							// 	if (jQuery(".career-opening-list > li:hidden").length == 0) {
							// 		jQuery(".load-more").css('visibility', 'hidden');
							// 	}

								// jQuery('html,body').animate({
								// 	scrollTop: jQuery(".load-more-btn").offset().top-700
								// }, 2000);
							// });
							//=====================load more=========================

         		}else{
         			jQuery(".opening-sec-wrap").html("<div class='error-career'>Unfortunately, at this time, we don't have any job vacancies that would match your profile and interests.</div>");
         		}
       		},2000);
        }
    });
}


//=====case study category click featues using ajax==========
jQuery(".case-cat-lists").find("li").on("click",function(){
	let case_term_id = jQuery(this).data("id");
	let case_term_name = jQuery(this).data("cat-name");
	jQuery(".loader-sec").show();
	jQuery(".reset-case").remove();
	jQuery(".case-cat-lists").find("li").removeClass("active");
	jQuery(this).addClass("active");
	case_category_lists(case_term_id, case_term_name); 
});
//=====case study category click featues using ajax==========


// ============case study on select in mobile=================
jQuery(".mobile-category-sec .case-cat-lists").on("change", function(){
	jQuery(".reset-case").remove();
	var case_term_id = jQuery(this).find("option:selected").val();
	var case_term_name = jQuery(this).find("option:selected").data("cat-name");
	jQuery(".loader-sec").show();
	jQuery(".case-cat-lists").find("option").removeClass("active");
	jQuery(this).find("option:selected").addClass("active");
	case_category_lists(case_term_id, case_term_name);
});
// ============case study on select in mobile=================

jQuery(document).on('click', ".reset-case", function(){
	jQuery(".loader-sec").show();
	jQuery(".mobile-category-sec .case-cat-lists").val("");
	jQuery(".reset-case").remove();
	jQuery(".case-cat-lists").find("li").removeClass("active");
	case_category_lists('', ''); 
});


//=======case studies category ajax function============
function case_category_lists(case_term_id, case_term_name){
		$.ajax({
       type : "POST",
       dataType : "json",
       url : frontendajax.ajaxUrl,
       data : {action: "fetch_case_study_cat_posts", case_term_id, case_term_name},
       success: function(response) {
       		setTimeout(function(){
         		jQuery(".loader-sec").hide();	
         		jQuery(".case-study-wrap").find(".category-sec").prepend("<button type='button' class='reset-case'>RESET</button>");
         		jQuery(".mobile-category-sec").prepend("<button type='button' class='reset-case'>RESET</button>");
         		if(response.status == true){
         			if(response.post_key == 'all'){
         				jQuery(".reset-case").remove();
         				jQuery(".case-pagination-sec").show();
         			}else{
         				jQuery(".case-pagination-sec").hide();
         			}
							jQuery(".case-studies-sec").html(response.data);
         		}else{
         			jQuery(".case-studies-sec").html("<p class='case-error-msg'>There are no case studies in the chosen category.</p>");
         			jQuery(".case-pagination-sec").hide();
         		}
       		},2000);
        }
    });  
}
//=======case studies category ajax function============



//=========press release search on click field============
jQuery(".search-press-release .submit-btn").find(".seach-press").on("click",function (){
		jQuery(".clear-press-input").remove();
		jQuery(".search-error-msg").html("");
		let search_val = jQuery(this).closest(".search-press-release").find("input[name='press-search']").val();
		let press_data = document.getElementById('press-release-lists');
		if(search_val != ""){
			jQuery(this).closest(".search-press-release").find("input[name='press-search']").removeClass("error");
			jQuery(".loader-sec").show();	
			press_search(search_val);
	 	}else{
	 		jQuery(this).closest(".search-press-release").find("input[name='press-search']").addClass("error");
   	jQuery(".search-error-msg").html("<p class='error'>Please enter search keyword in the search field.</p>");
   }	

});

// jQuery(".search-press-release").find("input[name='press-search']").on("input",function(){
// 	jQuery(".search-error-msg").html("");
// 	jQuery(".press-release-container .error-msg").remove();
// 		let search_val = jQuery(this).val();
// 		if(search_val == ""){
// 		jQuery(".loader-sec").show();	
// 			press_search(search_val);
// 		}
// });

jQuery(document).on("click", ".clear-press-input", function(){
	console.log("click");
	jQuery(".loader-sec").show();	
		jQuery("input[name='press-search']").val('');
		jQuery(".error").remove();
		press_search('');	
});



function press_search(search_val){
	
		$.ajax({
       type : "POST",
       dataType : "json",
       url : frontendajax.ajaxUrl,
       data : {action: "search_press_release_posts", search_val},
       success: function(response) {
       		setTimeout(function(){
         		jQuery(".loader-sec").hide();	
         			if(response.current_status == ""){
								jQuery(".search-press-release").append("<div class='clear-press-input'>RESET</div>");
							}else{
								jQuery(".clear-press-input").remove();
							}
         		if(response.status == true){
							jQuery(".press-release-container").html(response.data);
         		}else{
         			jQuery(".press-release-container").html("<p class='error-msg'>Sorry, but nothing matched your search terms. Please try again with some different keywords. </p>");
         		}
       		},2000);
        }
    });
  
}
//=========press release search on click field============


//==========lead generation service page tabbing js===========
jQuery(".expertise-tab").on("click",function(){
	let tab_id = jQuery(this).data("id");
	console.log(tab_id);
	jQuery(".expertise-tab").removeClass("active");
	jQuery(this).addClass("active");
	jQuery(".expertise-logos").hide();
	jQuery('#'+tab_id).show();	
});
//==========lead generation service page tabbing js===========

//========case studies search section==========
jQuery(".search-case-studies .submit-case-btn").find(".seach-case").on("click",function (){
		
		jQuery(".case-error-msg").html("");
		jQuery(".error-msg").remove();
		jQuery(".case-search-results").remove();
		jQuery(".clear-case-input").remove();
		let search_val = jQuery(this).closest(".search-case-studies").find("input[name='case-search']").val();
		if(search_val != ""){
			jQuery(this).closest(".search-case-studies").find("input[name='case-search']").removeClass("error");
			jQuery(".loader-sec-cat").show();	
			case_studies_search(search_val);
	 	}else{
	 	jQuery(this).closest(".search-case-studies").find("input[name='case-search']").addClass("error");	
   	jQuery(".case-error-msg").html("<p class='error'>Please enter search keyword in the search field.</p>");
   }	

});

//====case studies search function=============
function case_studies_search(search_val){
	jQuery(".case-search-results").remove();
		$.ajax({
       type : "POST",
       dataType : "json",
       url : frontendajax.ajaxUrl,
       data : {action: "search_case_studies_posts", search_val},
       success: function(response) {
       		setTimeout(function(){
         		jQuery(".loader-sec-cat").hide();
         		jQuery(".case-study-wrap").hide();	
         		jQuery(".search-case-studies").append("<div class='clear-case-input'>Clear All</div>");
         		if(response.status == true){
							jQuery(".case-study-wrap").parent().append(response.data);
         		}else{
         			jQuery(".case-study-wrap").parent().append("<p class='error-msg'>Sorry, but nothing matched your search terms. Please try again with some different keywords. </p>");
         		}
       		},2000);
        }
    });
}
//====case studies search function=============

//======clear all search result=========
jQuery(document).on("click", ".clear-case-input", function(){
	console.log("click");
	jQuery(".loader-sec-cat").show();	
	setTimeout(function(){
		jQuery(".loader-sec-cat").hide();
		jQuery("input[name='case-search']").val('');
		jQuery(".error-msg").remove();
		jQuery(".case-search-results").remove();
		jQuery(".clear-case-input").remove();
			jQuery(".case-study-wrap").show();			
	}, 1500);
});
//======clear all search result=========

//========case studies search section==========


//===========case studies detail page counter js==============
	$(".case-generated-data .data-number").find('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 4000,
		        easing: 'swing',
		        step: function (now) {
		            // $(this).text(Math.ceil(now));
		           $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
		        }
		    });
		});
//===========case studies detail page counter js==============


//=======case study detail page copy link button===========
	jQuery(".copyLink").on('click',function(){
		let copyText = document.querySelector(".copy-link-btn");
		  var temp=document.createElement('input');
		  var texttoCopy=jQuery(this).data('url');
		  temp.type='input';
		  temp.setAttribute('value',texttoCopy);
		  document.body.appendChild(temp);
		    temp.select();
		  document.execCommand("copy");
		  copyText.classList.add("active");
		  temp.remove();	
		  setTimeout(function () {
				copyText.classList.remove("active");
			}, 1500);
	});
//=======case study detail page copy link button===========



//=========map location active js============

// if($('.network_section')[0]){
// 	$(window).scroll(function() {
// 	 	var hT = $('.network_section').offset().top - 350;
// 	       hH = $('.network_section').innerHeight(),
// 	       wH = $(window).height(),
// 	       wS = $(this).scrollTop();
// 	  if (wS > (hT+hH-wH)){
	//===================================================================
				// var lis = jQuery(".maplocation_wrap > div"),
				// currentHighlight = 0;
				// N = 5;

				// jQuery(".maplocation_wrap > div:first-child").addClass('active');
				// setInterval(function() {
				//     currentHighlight = (currentHighlight + 1) % lis.length;
				//     lis.removeClass('active').eq(currentHighlight).addClass('active');
				// }, N * 1200);
//===================================================================				
		// }
// 	});	
// }			

//=========map location active js============

// =========ABM Services page graph animation=========
if(jQuery("body").hasClass("account-based-marketing")){  
	  var dataset = [
		  { name: "Direct", count: 1242 },
		  { name: "Facebook", count: 2242 },
		  { name: "Pinterest", count: 650 },
		  { name: "Others", count: 2050 },
		];

		var total = 0;

		dataset.forEach(function (d) {
		  total += d.count;
		});

		var pie = d3.layout
		  .pie()
		  .value(function (d) {
		    return d.count;
		  })
		  .sort(null);

		var w = 135,
		  h = 135;

		var outerRadiusArc = w / 2;
		var innerRadiusArc = 0;
		var shadowWidth = 10;

		var color = d3.scale
		  .ordinal()
		  .range(["#F58634", "rgba(245, 134, 52, 0.75)", "rgba(245, 134, 52, 0.5)", "rgba(245, 134, 52, 0.25)", "rgba(245, 134, 52, 0.1)"]);


		var svg = d3
		  .select("#abm-chart")
		  .append("svg")
		  .attr({
		    width: w,
		    height: h,
		    class: "shadow",
		  })
		  .append("g")
		  .attr({
		    transform: "translate(" + w / 2 + "," + h / 2 + ")",
		  });

		var createChart = function (
		  svg,
		  outerRadius,
		  innerRadius,
		  fillFunction,
		  className
		) {
		  var arc = d3.svg.arc().innerRadius(outerRadius).outerRadius(innerRadius);
		    console.log(d3.svg.arc());
		  var path = svg
		    .selectAll("." + className)
		    .data(pie(dataset))
		    .enter()
		    .append("path")
		    .attr({
		      class: className,
		      d: arc,
		      fill: fillFunction,
		    });

		  path
		    .transition()
		    .duration(4000)
		    .attrTween("d", function (d) {
		      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
		      return function (t) {
		        return arc(interpolate(t));
		      };
		    });
		};



	$(window).scroll(function() {
		   var hT = $('.abm-services-enterprises').offset().top,
		       hH = $('.abm-services-enterprises').innerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		   if (wS > (hT+hH-wH)){
				createChart(
				  svg,
				  outerRadiusArc,
				  innerRadiusArc,
				  function (d, i) {
				    return color(d.data.name);
				  },
				 'path1'
				);
			}
	});

}
// =========ABM Services page graph animation=========


//=========career accordion js on click============

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("career-content");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
        } else {
            contentDiv[i].style.height = "0px";
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = 0;
            }
        }
    });
}

//=========career accordion js on click============

//========search on click js=============
jQuery(".search-icon").on("click",function(){
	jQuery('body').addClass("show-popup-search");
	jQuery('html').addClass("no-scroll");
	jQuery(".search-form-wrap").addClass("active-search");
	jQuery(".search-form-wrap").show();
});

jQuery(".search-form-wrap .search-close").on("click",function(){
	jQuery('body').removeClass("show-popup-search");
	jQuery('html').removeClass("no-scroll");
	jQuery(".search-form-wrap").removeClass("active-search");
	jQuery(".search-form-wrap").hide();
});
//========search on click js=============

	//============ABM Counter js===================
	if(jQuery(".accountbased-banner")[0]){
			jQuery('.count-banner').each(function () {
	      jQuery(this).prop('Counter',0).animate({
	          Counter: jQuery(this).text()
	      }, {
	          duration: 4000,
	          easing: 'swing',
	          step: function (now) {
	              $(this).text(Math.ceil(now));
	              $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
	          }
	      });
	    });
		}  
	//============ABM Counter js===================

//=======scroll to section from header menu==============
	// jQuery(".review-menu-btn").click(function(e) {
	// 	e.preventDefault();
	// 	jQuery('html, body').animate({
	// 	    scrollTop: $(".clientreview_sec").offset().top
	// 	}, 2000);
	// });

	// jQuery(".testi-menu-btn").click(function(e) {
	// 	e.preventDefault();
	// 	jQuery('html, body').animate({
	// 	    scrollTop: jQuery(".testimonial_sec").offset().top
	// 	}, 2000);
	// });
//=======scroll to section from header menu==============


//===========blog popup on scroll the page=================

function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

if (typeof $.cookie('blog-form') === 'undefined'){
	var popup = jQuery('.blog-form-wrap');
	jQuery(window).scroll(function(){
		if(jQuery('body').hasClass("single-post")){
			if(jQuery(window).scrollTop() > jQuery(document).height()/4){
				// jQuery("html").addClass('popup_show'); 
					popup.addClass('popup_show'); 

					// ========set cookie=========
					// var date = new Date();
					//var expire_date = date.getDate() + 12;
					//console.log(expire_date);
					// date.setTime(date.getTime() + (120 * 1000));
					// date.setDate(date.getDate() + 12);
					// $.cookie('blog-form', 'yes', { expires: date,  path: '/' });
					setCookie('blog-form', 'yes', 12);
					// ========set cookie=========

			};
		
			jQuery('.blog-form-wrap .close-subscribe').on('click', function() {
				 //jQuery("html").removeClass('popup_show'); 
				popup.css('display', 'none');
			});
		}	
	});
}	

	
//===========blog popup on scroll the page=================


//=======career page popup js on click========
	jQuery(document).on("click", ".apply-now-btn .show-form", function(){
		jQuery("html").addClass("no-scroll");
		jQuery("body").addClass("show-popup-form");
		jQuery(".career-form-wrap").show();
	});

	jQuery(document).on("click", ".career-form-wrap .close" , function(){
		jQuery("html").removeClass("no-scroll");
		jQuery("body").removeClass("show-popup-form");
		jQuery(".career-form-wrap").hide();
	});
//=======career page popup js on click========



//=========humberger on click js============
jQuery("#primary-mobile-menu").find("span.open").on("click", function(){
   jQuery("html").addClass("mobile-menu-open");  
});

jQuery("#primary-mobile-menu").find("span.close").on("click", function(){
   jQuery("html").removeClass("mobile-menu-open");  
});
//=========humberger on click js============

//========on click submenu js==========
jQuery("#primary-menu-list").find("li").removeClass('sub-menu-show');
jQuery(".sub-menu-toggle").parent("li").on("click", function(){
    // console.log(jQuery(this).attr("aria-expanded"));
    // if(jQuery(this).attr("aria-expanded") == 'true'){
        jQuery(this).toggleClass('sub-menu-show');
    // }else{
    //     jQuery(this).parent("li").removeClass('sub-menu-show');
    // }
});

//========on click submenu js==========



//===========influencer load more js==============
jQuery(".influencer-all-post").slice(0, 2).show();
jQuery("body").on('click touchstart', '.row-influencer .load-more', function (e) {
	e.preventDefault();
	jQuery(".influencer-all-post:hidden").slice(0, 2).slideDown();
	if (jQuery(".influencer-all-post:hidden").length == 0) {
		jQuery(".load-more").css('visibility', 'hidden');
	}
	jQuery('html,body').animate({
		scrollTop: jQuery(this).offset().top-500
	}, 1000);
});
//===========influencer load more js==============


//=======ebooks loadmore section===================
if(!jQuery(".ebooks-search-results")[0]){
	jQuery(".row-ebboks-wrap .ebook-all-post").slice(0, 3).show();

	var elength = jQuery(".row-ebboks-wrap .ebook-all-post").length;
	if(elength > 3){
		jQuery(".row-ebook").find(".load-more-btn").show();
	}else{
		jQuery(".row-ebook").find(".load-more-btn").hide();
	}
}

jQuery("body").on('click touchstart', '.row-ebboks-wrap .load-more', function (e) {
	e.preventDefault();
	var __this = jQuery(this);
	jQuery(".ebook-all-post:hidden").slice(0, 3).slideDown();
	if (jQuery(".ebook-all-post:hidden").length == 0) {
		jQuery(".load-more").css('visibility', 'hidden');
	}

	jQuery('html,body').animate({
		scrollTop: jQuery(".load-more-btn").offset().top-700
	}, 2000);
});
//=======ebooks loadmore section===================



//==========intervier popup video section=============
jQuery(".play-btn").find("svg").on("click", function(){
    jQuery("html").addClass('no-scroll'); 
    jQuery("body").addClass("show-video-popup");
    jQuery(".interview-video-popup-sec").show();

});

jQuery(".interview-video-popup-sec").find(".video-close").on("click", function(){
    jQuery("html").removeClass('no-scroll');
    jQuery("body").removeClass("show-video-popup");
    jQuery(".interview-video-popup-sec").hide();

});
//==========intervier popup video section=============


//========mobile tabbing section===========

jQuery('.expertise-list:first-child').addClass('active');
jQuery('.expertise-list').click(function(){
	jQuery('.expertise-list').removeClass('active');
	jQuery(this).addClass('active');	
});

//========mobile tabbing section===========


//==========ebook PDF Download js=============
// document.addEventListener( 'wpcf7mailsent', function( event ) {
// 	if( '1273' == event.detail.contactFormId){
// 			var newUrl = jQuery("input[name='ebook_pdf_url']").val();
// 			 var urlArray = newUrl.split("/");
// 			 var pdfName = urlArray[urlArray.length-1];
// 			 var a = document.createElement('a');
// 			 a.href = newUrl;
// 			a.download = pdfName;
// 	    document.body.appendChild(a);
// 	    a.click();
// 	    document.body.removeChild(a);
// 	} 
// }, false );
//==========ebook PDF Download js=============



//============Ebook search js on click================
jQuery(".search-ebboks .submit-ebook-btn").find(".seach-ebook").on("click",function (){
		
		jQuery(".ebook-error-msg").html("");
		jQuery(".error-msg").remove();
		jQuery(".clear-ebook-input").remove();
		let search_val = jQuery(this).closest(".search-ebboks").find("input[name='ebook-search']").val();
		if(search_val != ""){
			jQuery(this).closest(".search-ebboks").find("input[name='ebook-search']").removeClass("error");
			jQuery('html, body').animate({
        scrollTop: $(".row-ebboks-wrap").offset().top
   		 }, 1000);
			jQuery(".loader-sec").show();	
			ebooks_search(search_val);
	 	}else{
	 	jQuery(this).closest(".search-ebboks").find("input[name='ebook-search']").addClass("error");		
   	jQuery(".ebook-error-msg").html("<p class='error'>Please enter search keyword in the search field.</p>");
   }	

});

//====ebook search function=============
function ebooks_search(search_val){
		$.ajax({
       type : "POST",
       dataType : "json",
       url : frontendajax.ajaxUrl,
       data : {action: "search_ebooks_posts", search_val},
       success: function(response) {
       		setTimeout(function(){
         		jQuery(".loader-sec").hide();
         		jQuery(".row-ebook").hide();	
         		jQuery(".search-ebboks").append("<div class='clear-ebook-input'>RESET</div>");
         		if(response.status == true){
							jQuery(".row-ebboks-wrap").append(response.data);
         		}else{
         			jQuery(".row-ebboks-wrap").append("<p class='error-msg'>Sorry, but nothing matched your search terms. Please try again with some different keywords. </p>");
         		}
       		},2000);
        }
    });
}
//====ebook search function=============

//======clear all search result=========
jQuery(document).on("click", ".clear-ebook-input", function(){
	jQuery('html, body').animate({
    scrollTop: $(".row-ebboks-wrap").offset().top
	 }, 1000);
	jQuery(".loader-sec").show();	
	setTimeout(function(){
		jQuery(".loader-sec").hide();
		jQuery("input[name='ebook-search']").val('');
		jQuery(".error-msg").remove();
		jQuery(".ebooks-search-results").remove();
		jQuery(".clear-ebook-input").remove();
			jQuery(".row-ebook").show();			
	}, 1500);
});
//======clear all search result=========

//============Ebook search js on click================



//=========active menu js==============
jQuery("#primary-menu-list .sub-menu").find("li").each(function(){
	var url = jQuery(this).find("a").attr("href");
	if(jQuery("body").hasClass("post-type-archive-case-studies")){
			if(window.location.href == url){
				jQuery(this).addClass("current-menu-item");
				jQuery(this).closest("ul").parent("li").addClass("current-menu-parent");
			}
	}else if(jQuery("body").hasClass("single-post")){
		if ((url.indexOf("blog") > -1)) {
			jQuery(this).addClass("current-menu-item");
			jQuery(this).closest("ul").parent("li").addClass("current-menu-parent");
		}	
	}else if(jQuery("body").hasClass("single-ebook")){
		if ((url.indexOf("ebook") > -1)) {
			jQuery(this).addClass("current-menu-item");
			jQuery(this).closest("ul").parent("li").addClass("current-menu-parent");
		}	
	}else if(jQuery("body").hasClass("single-case-studies")){
		if ((url.indexOf("case-studies") > -1)) {
			jQuery(this).addClass("current-menu-item");
			jQuery(this).closest("ul").parent("li").addClass("current-menu-parent");
		}	
	}else if(jQuery("body").hasClass("single-press-release")){
		if ((url.indexOf("press-release") > -1)) {
			jQuery(this).addClass("current-menu-item");
			jQuery(this).closest("ul").parent("li").addClass("current-menu-parent");
		}	
	}  	
});

jQuery("#menu-company_menu li").each(function(){
	var url = jQuery(this).find("a").attr("href");
	if(window.location.href == url){
		jQuery(this).addClass("current-menu-item");
	}else if(jQuery("body").hasClass("single-post")){
		if ((url.indexOf("blog") > -1)) {
			jQuery(this).addClass("current-menu-item");
		}
	}else if(jQuery("body").hasClass("single-ebook")){
		if ((url.indexOf("ebook") > -1)) {
			jQuery(this).addClass("current-menu-item");
		}	
	}else if(jQuery("body").hasClass("single-case-studies")){
		if ((url.indexOf("case-studies") > -1)) {
			jQuery(this).addClass("current-menu-item");
		}	
	}else if(jQuery("body").hasClass("single-press-release")){
		if ((url.indexOf("press-release") > -1)) {
			jQuery(this).addClass("current-menu-item");
		}	
	}else if(jQuery("body").hasClass("single-interview")){
		if ((url.indexOf("influencers-interview") > -1)) {
			jQuery(this).addClass("current-menu-item");
		}	
	} 
});	

//=========active menu js==============

//==========contact form popup section=========== 
jQuery(".contact-popup").on("click", function(e){
		e.preventDefault();
    jQuery("html").addClass("no-scroll");
    jQuery("body").addClass("show-contact-popup");
    jQuery(".contact-form-wrap").show();
});

jQuery(".contact-form-wrap").find(".close").on("click", function(){
    jQuery("html").removeClass("no-scroll");
    jQuery("body").removeClass("show-contact-popup");
    jQuery(".contact-form-wrap").hide();
});
//==========contact form popup section=========== 


//=======footer hover js=========
if(jQuery("footer")[0]){
	document.getElementsByTagName("footer")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px"
	});
	var e = document.getElementById("cursor2");

	 $(".cursor2").hide();

	$(".site-footer").on("mouseover", function(){
	    $(".cursor2").show();
	});
	$(".site-footer").on("mouseleave", function(){
	    $(".cursor2").hide();
	});
}


//=======footer hover js=========





});//=========End Document=============



//=======on page load section==========
jQuery(window).on('load',function(){
	jQuery(".demand_generation_banner").addClass("active");
	jQuery(".accountbased-banner").addClass("active");  
	jQuery(".sqlleads-banner").addClass("active");  
	jQuery(".webinarlead-banner").addClass("active");  
	jQuery(".leadgeneration-banner").addClass("active");  

	//=========mobile animationn for proccess flow===========

// if(jQuery('.magic-mobileanimation')[0]){
// 	jQuery(window).scroll(function() {
// 	  var hT = jQuery('.magic-mobileanimation').offset().top - 200;
// 	       hH = jQuery('.magic-mobileanimation').innerHeight(),
// 	       wH = jQuery(window).height(),
// 	       wS = jQuery(this).scrollTop();
// 	  if (wS > (hT+hH-wH)){
				var main_row = jQuery(".magicanim-row"); 
				var lis = jQuery(".magicanim-row > div");
				currentHighlight = 0;
				N = 5;

				jQuery(".magicanim-row > div:first-child").addClass('active');
				jQuery(".magicanim-row").addClass("startegy-1");
				setInterval(function() {
				    currentHighlight = (currentHighlight + 1) % lis.length;
				    var str_count = parseInt(currentHighlight+1);
				    lis.removeClass('active').eq(currentHighlight).addClass('active');
				    main_row.removeClass("startegy-1 startegy-2 startegy-3 startegy-4");
				    main_row.addClass("startegy-"+str_count);
				}, N * 2500);
// 		}
// 	});			
// }	
//=========mobile animationn for proccess flow===========

///==========all btn animation js===============
jQuery(".custom-btn").find("button").each(function(){
	var cta_btn1 = jQuery(this).text();
	jQuery(this).html(`<div class="btn-wrap-txt"><span class='btn-text'>${cta_btn1}</span><span class='new-btn-text'>${cta_btn1}</span></div>`);
});

// if((jQuery("body").hasClass("home")) || (jQuery("body").hasClass("post-type-archive-case-studies"))) {
	jQuery(".custom-btn").find("a").each(function(){	
	    var cta_btn1 = jQuery(this).text();
	    jQuery(this).html(`<div class="btn-wrap-txt"><span class='btn-text'>${cta_btn1}</span><span class='new-btn-text'>${cta_btn1}</span></div>`);
	});
// }	

// jQuery("a.custom-btn").each(function(){
//     var cta_btn1 = jQuery(this).text();
//     jQuery(this).html(`<div class="btn-wrap-txt"><span class='btn-text'>${cta_btn1}</span><span class='new-btn-text'>${cta_btn1}</span></div>`);
// });

var cta_btn1 = jQuery(".header-sme-btn").find(".custom-btn").text();
jQuery(".header-sme-btn").find(".custom-btn").html(`<div class="btn-wrap-txt"><span class='btn-text'>${cta_btn1}</span><span class='new-btn-text'>${cta_btn1}</span></div>`);
///==========all btn animation js===============


setTimeout(function(){
	jQuery("html").removeClass("global-loader");
	jQuery(".mainloder").hide();
	jQuery("body").addClass("check-global-loader");	
}, 1000);



// ==========career load more section=========
jQuery(".career-opening-list > li").slice(0, 6).show();

var elength = jQuery(".career-opening-list > li").length;
if(elength > 6){
	jQuery(".career-list-sec").find(".load-more-btn").show();
}else{
	jQuery(".career-list-sec").find(".load-more-btn").hide();
}

jQuery("body").on('click', '.career-list-sec .load-more', function (e) {
	e.preventDefault();
	var __this = jQuery(this);
	jQuery(".career-opening-list > li:hidden").slice(0, 6).slideDown();
	if (jQuery(".career-opening-list > li:hidden").length == 0) {
		jQuery(".load-more").css('visibility', 'hidden');
	}

	// jQuery('html,body').animate({
	// 	scrollTop: jQuery(".load-more-btn").offset().top-700
	// }, 2000);
});
// ==========career load more section=========


});
//=======on page load section==========
