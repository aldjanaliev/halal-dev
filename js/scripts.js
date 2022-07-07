$(document).ready(function () {

  //   $(".filter-clear").on("click", function() {
  //     $(".filter input").val("");
  //     $(".filter input").focus();
  // });
  // $('.smoothScroll').click(function() {
  //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000); // The number here represents the speed of the scroll in milliseconds
  //       return false;
  //     }
  //   }
  // });

  $('.filter-extended-link,.filter-search-close').click(function () {
    if ($('.filter-extended-link,.filter-extended,.filter').hasClass('open')) {
      $('.filter-extended-link,.filter-extended,.filter').removeClass('open');
    } else {
      $('.filter-extended-link,.filter-extended,.filter').addClass('open');
    }
  });



  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.filter-range__area');
      // Evento
      links.on('click', {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('active');

      if (!e.data.multiple) {
        $el.find('.filter-range__dropdown').not($next).slideUp().parent().removeClass('active');
      };
    }

    var accordion = new Accordion($('.filter'), false);
  });

  $(document).mouseup(function (e) {
    var container = $(".filter-range");
    if (container.has(e.target).length === 0) {
      container.removeClass('active');
    }
  });
  $(document).mouseup(function (e) {
    var container = $(".filter-range__dropdown");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $('.tabs').tabs();

 
  $('.filter-close').click(function () {
    if ($('.filter').hasClass('active')) {
      $('.filter').removeClass('active');
    } else {
      $('.filter').addClass('active');
    }
  });

  $('.view-item-list').click(function () {
    $('.catalog-item,.catalog-block').addClass('wide');

  });
  $('.view-item-cards').click(function () {
    $('.catalog-item,.catalog-block').removeClass('wide');
  });

  $('.view-item-list').click(function () {
    $('.view-item').addClass('active');
    $('.view-item-cards').removeClass('active');

  });
  $('.view-item-cards').click(function () {
    $('.view-item').addClass('active');
    $('.view-item-list').removeClass('active');

  });


  $('select').material_select();


  $('.btn--filter-mobile').click(function () {
    if ($('.filter').hasClass('active')) {
      $('.filter').removeClass('active');
    } else {
      $('.filter').addClass('active');
    }
  });

  // $('.filter-range__area').click(function () {
  //   if ($(this).parent().hasClass('active')) {
  //     $('.filter-range__dropdown').parent().removeClass('active');
  //   } else {
  //     $(this).parent().addClass('active');
  //   }
  // });

  // $(document).mouseup(function (e){  
  //   var div = $(".filter-range");  //класс элемента вне которого клик
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {  
  //           div.removeClass('active');  
  //   }
  // });



  function move1Tomove2() {
    if (!document.querySelector(".move-1 > .move-2")) {
      var move2Block = document.querySelector(".move-2");
      var move1Block = document.querySelector(".move-1");
      if (move2Block && move1Block) {
        move2Block.appendChild(move1Block);
      }
    }
  }

  function move3Tomove4() {
    if (!document.querySelector(".move-3 > .move-4")) {
      var move4Block = document.querySelector(".move-4");
      var move3Block = document.querySelector(".move-3");
      if (move4Block && move3Block) {
        move4Block.appendChild(move3Block);
      }
    }
  }



  function handleResize() {
    var width = window.innerWidth;

    if (width < 992) {
      move1Tomove2();
      move3Tomove4();
      return;
    }

  }

  window.addEventListener("resize", handleResize);
  handleResize();

	// ==============
	$('.currience-in').slideUp(0)
	$('.currience_title').on('click', function(){
		$('.currience-in').slideToggle(300)
		$(this).toggleClass('currience_title__active')
	})

	$('.currience_item').on('click', function(){
		$('.currience-in').slideUp(300)
		$('.currience_item__active').removeClass('currience_item__active')
		$(this).addClass('currience_item__active')
		$('.currience_title').text($(this).text())
		$('.currience_title__active').removeClass('currience_title__active')
	})

	$('.show-txt').on('click', function(){
		let addTxt = $(this).prev()
		let addTxtHeight = $('.about_txt').outerHeight()
		addTxt.css('height', addTxtHeight + 'px')
		$(this).css('display', 'none')
	})

	$('.date-wrap').on('click', '.date', function(){
		console.log(555)
		if(!$(this).hasClass('date-active')){
			$(this).closest('.date-wrap').find('.date-active').removeClass('date-active')
			$(this).addClass('date-active')
		}
	})

	// стр детално, динамика для слайда планировки
	$('.layout_nav-all').text($('.layout_slide-nav').length)
	$('.layout_slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
		console.log(nextSlide)
		$('.layout_nav-current').text(currentSlide + 1)
	});

	$('.detail_slider').slick({
		dots: true,
    infinite: true,
		arrows: false,
    // speed: 500,
	})

	$('.order_slider').slick({
		dots: false,
    infinite: false,
		arrows: true,
		slidesToShow: 7,
    responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
			}
		}]
	})

	$('.layout_slider-main').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		fade: true,
		asNavFor: '.layout_slider-nav'
	})

	$('.layout_slider-nav').slick({
		dots: false,
		arrows: true,
		slidesToShow: 3,
		asNavFor: '.layout_slider-main',
		focusOnSelect: true,
	})

	// === cлайд внутри слайдера
	

	$('.catalog_in-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 1,
	})

	$(window).on("load resize", function(){
		var $wrapperSlider = $('.catalog-slider'),
		wrapperSlider = $wrapperSlider[0];
		if (document.documentElement.clientWidth < 992) {
			$('.catalog_in-slider').on('mousedown touchmove', function(){
				wrapperSlider.slick.setOption({
					swipe: false
				})
			})
			$('.catalog_in-slider').on('afterChange', function(event, slick){
				wrapperSlider.slick.setOption({
					swipe: true
				})
			});
		}
	})
	// === /cлайд внутри слайдера


	$('.show-more').on('click', function(){
		let itemParent = $(this).siblings('.show-catalog')
		itemParent.find('.item').slideDown(300)
		$(this).css('display','none')
	})

});



if (document.documentElement.clientWidth < 992) {
  // $('.filter-search-close').click(function () {
  //   if ($('.filter').hasClass('active')) {
  //     $('.filter').removeClass('active');
  //   } else {
  //     $('.filter').addClass('active');
  //   }
  // });

  $('.catalog-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
}