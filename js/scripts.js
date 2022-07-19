$(document).ready(function () {

  $('.tabs').tabs();

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

	// filter
	$('.filter-btn').on('click', function(){
		let wrap = $(this).closest('.search-wrap')
		if($(this).hasClass('show')){
			$(this).css('display','none')
			wrap.addClass('active')
			wrap.find('.search_tab').slideDown(300)
		} else if($(this).hasClass('hide')){
			wrap.find('.show').css('display','inline-block')
			wrap.removeClass('active')
			wrap.find('.search_tab').slideUp(300)
		} else if($(this).hasClass('clear')){
			wrap.find('input[type="checkbox"]').prop('checked', false)
			wrap.find('.item_val').text('')
			wrap.find('.item_li.active').removeClass('active')
			wrap.find('.range-f').text('__ ')
			wrap.find('.range-s').text('__ ')
			wrap.find('.range_input').val('')
			console.log(55)
		}
		if($(this).hasClass('filter-btn__mob-show')){
			$('.filter-btn__mob-hide').css('display','inline-block')
		} else if($(this).hasClass('filter-btn__mob-hide')){
			$('.filter-btn__mob-hide').css('display','none')
		}
	})

	$('.filter-btn__mob').on('click', function(){
		if($(this).hasClass('search_close')){
			$('.search').slideUp(300)
			$('.search').css('display','flex')
			setTimeout(function(){
				$('.search-container').css('z-index','10')
			},300)
		} else{
			$('.search').slideDown(300)
			$('.search-container').css('z-index','1000')
		}
	})

	$('.item_title').on('click', function(){
		let parent = $(this).closest('.item')
		let itemBody = parent.find('.item_body')
		if(parent.hasClass('active')){
			itemBody.slideUp(300)
			parent.removeClass('active')
		} else{
			$('.item_body').slideUp(300)
			$('.item').removeClass('active')
			itemBody.slideDown(300)
			parent.addClass('active')
		}
		closeSubMenu()
	})

	$('.item_li').on('click', function(){
		let parent = $(this).closest('.item')
		let itemBody = parent.find('.item_body')
		let itemVal = parent.find('.item_val')
		itemVal.text($(this).text())
		itemBody.slideUp(300)
		parent.removeClass('active')
		parent.find('.active').removeClass('active')
		$(this).addClass('active')
	})

	$('.select_head').on('click', function(){
		let parent = $(this).closest('.select')
		if(parent.hasClass('active')){
			parent.removeClass('active')
			parent.find('.select_body').slideUp(300)
		} else{
			parent.addClass('active')
			parent.find('.select_body').slideDown(300)
		}
		closeSubMenu()
	})

	$('.select_item').on('click', function(){
		let parent = $(this).closest('.select')
		parent.find('.active').removeClass('active')
		parent.removeClass('active')
		parent.find('.select_body').slideUp(300)
		$(this).addClass('active')
		parent.find('.select_head').text($(this).text())
	})

	function checkTxt(item){
		item.value = item.value.replace(/[^0-9]/gi, '');
		$(item).prop('maxLength', 10);
		$(item).bind("cut copy paste",function(e) {
	    	e.preventDefault();
	    });
	}

	$('.range_input').on('input', function(){
		checkTxt(this)
		let parent = $(this).closest('.item')
		if($(this).hasClass('range_input__f')){
			if($(this).val() == ''){
				parent.find('.range-f').text('0')
			} else{
				parent.find('.range-f').text($(this).val())
			}
		} else if($(this).hasClass('range_input__s')){
			if($(this).val() == ''){
				parent.find('.range-s').text('5000')
			} else{
				parent.find('.range-s').text($(this).val())
			}
		}
	})
	
	$('.section_title').on('click', function(){
		console.log(123)
	})

	// ==============
	$('.currience-in').slideUp(0)
	$('.currience-choose').on('click', '.currience_title', function(){
		console.log(666)
		let thisParent = $(this).closest('.currience-choose')
		if($(this).hasClass('currience_title__active')){
			$(this).removeClass('currience_title__active')
			thisParent.find('.currience-in').slideUp(300)
		} else{
			$(this).addClass('currience_title__active')
			thisParent.find('.currience-in').slideDown(300)
			closeSubMenu()
		}
	})

	$('.currience_item').on('click', function(){
		let thisParent = $(this).closest('.currience-choose')
		thisParent.find('.currience-in').slideUp(300)
		thisParent.find('.currience_item__active').removeClass('currience_item__active')
		$(this).addClass('currience_item__active')
		thisParent.find('.currience_title').text($(this).text())
		thisParent.find('.currience_title__active').removeClass('currience_title__active')
	})

	function closeSubMenu(){
		$(document).mouseup( function(e){
			if($('.currience_title__active').length != 0){
				let elParent = $('.currience_title__active').closest('.currience-choose')
				if ( !elParent.is(e.target) && elParent.has(e.target).length === 0) {
					$('.currience-in').slideUp(300)
					$('.currience_title').removeClass('currience_title__active')
				}
			}
			if($('.search .item.active').length != 0){
				let el = $('.search .item.active')
				if ( !el.is(e.target) && el.has(e.target).length === 0) {
					el.find('.item_title').click()
				}
			}
			if($('.select.active').length != 0){
				let el = $('.select.active')
				if ( !el.is(e.target) && el.has(e.target).length === 0) {
					el.find('.select_head').click()
				}
			}
		});
	}

	let addTxtHeight = $('.about_txt-wrap').outerHeight()
	$('.about_btn').on('click', function(){
		let parent = $(this).closest('.show-txt_container')
		let addTxt = parent.find('.about_txt-wrap')
		if(!$(this).hasClass('show-txt')){
			addTxt.css('height', addTxtHeight + 'px')
			$(this).css('display','none')
			$('.show-txt').css('display','block')
		} else{
			let addTxtHeight = parent.find('.about_txt').outerHeight()
			addTxt.css('height', addTxtHeight + 'px')
			$(this).css('display','none')		
			$('.hide-txt').css('display','block')
		}
		
	})

	$('.date-wrap').on('click', '.date', function(){
		if(!$(this).hasClass('date-active')){
			$(this).closest('.date-wrap').find('.date-active').removeClass('date-active')
			$(this).addClass('date-active')
			// move slider
			let slideParent = $(this).closest('.slick-slider')
			let slideActive = slideParent.find('.slick-active')
			let slide = $(this).closest('.slick-active')
			slideParent.find('.slick-counter').removeClass('slick-counter')
			slide.addClass('slick-counter')
			let slideCount = slideParent.find('.slick-counter')
			let slideIndex = slideActive.index(slideCount)
			if(slideIndex == 0){
				slideParent.find('.slick-prev').click()
			} else if(slideIndex == slideActive.length - 1){
				slideParent.find('.slick-next').click()
			}
		}
	})

	// modal close btn
	$('.btn-close').on('click', function(){
		let modalBtn = $(this).closest('.modal').find('.fancybox-close-small')
		modalBtn.click()
	})

	// стр детально, динамика для слайда планировки
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

	
	$('.show-more').on('click', function(){
		let itemParent = $(this).siblings('.show-catalog')
		itemParent.find('.item').slideDown(300)
		$(this).css('display','none')
		$(this).closest('.container').find('.catalog_in-slider').slick('refresh');
	})

	// compare sliders
	$('.compare_slider-main').slick({
		dots: false,
		arrows: true,
		infinite: false, 
		draggable: false,
		slidesToShow: 3,
		asNavFor: '.compare_slider-nav',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		}]
	})

	$('.compare_slider-nav').slick({
		dots: false,
		infinite: false, 
		arrows: false,
		slidesToShow: 3,
		asNavFor: '.compare_slider-main',
		draggable: false,
		swipe: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		}]
	})

	$('.compare_slider-wrap').on('click', '.js-remove-slide', function() {
		let slideIndex = $(this).closest('.slick-slide').index()
		let slideCount = $(this).closest('.slick-list').find('.slick-slide').length
		console.log(slideCount)
		if(slideCount > 2){
			$('.compare_slider-main').slick('slickRemove', slideIndex);
			$('.compare_slider-nav').slick('slickRemove', slideIndex);
		}
	});

	$('.js-remove-all').on('click', function() {
		let slideCount = $('.compare_slider-main').find('.slick-slide').length
		console.log(slideCount)
		for(let i = 1; i < slideCount - 1; i++){
			$('.compare_slider-main').slick('slickRemove', 1);
			$('.compare_slider-nav').slick('slickRemove', 1);
		}
	});

	// paginations
	$('.paginations').on('click', 'button', function(){
		if(!$(this).hasClass('prev') && !$(this).hasClass('next')){
			$('.paginations .active').removeClass('active')
			$(this).addClass('active')
		}
		$('html, body').animate({
			scrollTop: $('#scroll-pagination').offset().top
		});
		return false;
	})

	// compare menu fixed on scroll
	if($('.compare_slider-wrap').length != 0){
		// var offset = $('.compare_slider-wrap').offset().top;
		var offset = $('.catalog-item__content').eq(0).offset().top;
		console.log(offset)
		$(window).scroll(function() {
			var scroll = $(window).scrollTop() 
			if (scroll > offset) {
				$('.section--compare').addClass('active')
				$('.compare_slider-wrap').addClass('active')
				$('section').css('padding-bottom', 160 + 'px')
			} else if(scroll < offset ){
				$('.section--compare').removeClass('active')
				$('.compare_slider-wrap').removeClass('active')
				$('section').css('padding-bottom', 0)

			}
		});
	}

	// header fixed
	var offsetSectiont = $('section').eq(1).offset().top - 56;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop() 
		if (scroll > offsetSectiont) {
			$('.header-content').addClass('active')
		} else if(scroll < offsetSectiont){
			$('.header-content').removeClass('active')
		}
	});
	
	



	// === cлайд внутри слайдера
	

	$('.catalog_in-slider').slick({
		dots: true,
		arrows: false,
		infinite: false,
		slidesToShow: 1,
	})

	$('.view-item-list').click(function () {
		let thisParent = $(this).closest('.catalog-wrap')
    thisParent.find('.catalog-item,.catalog-block').addClass('wide');
		thisParent.find('.catalog_in-slider').slick('refresh');
  });
  $('.view-item-cards').click(function () {
		let thisParent = $(this).closest('.catalog-wrap')
    thisParent.find('.catalog-item,.catalog-block').removeClass('wide');
		thisParent.find('.catalog_in-slider').slick('refresh');
  });

  $('.view-item-list').click(function () {
		let thisParent = $(this).closest('.catalog-wrap')
    thisParent.find('.view-item').addClass('active');
    thisParent.find('.view-item-cards').removeClass('active');

  });
  $('.view-item-cards').click(function () {
		let thisParent = $(this).closest('.catalog-wrap')
    thisParent.find('.view-item').addClass('active');
    thisParent.find('.view-item-list').removeClass('active');
  });


	// === вкл/откл слайдер при ресайзе
	$(window).on("load resize", function(){

		let catalogSlider = $('.catalog-slider');
		let initSlider = $('.catalog-slider.slick-initialized');
		var width = $(document).width();
		if (width > 992) {
			if (initSlider.length > 0) {
				catalogSlider.slick('unslick');
			}
			if($('.catalog_in-slider').hasClass('sm') || $('.catalog_in-slider').hasClass('xs')){
				$('.catalog_in-slider.sm').removeClass('sm')
				$('.catalog_in-slider.xs').removeClass('xs')
				let sliderInSlider = document.querySelectorAll('.catalog_in-slider')
				sliderInSlider.forEach(item =>{
					$(item).slick('refresh')
				})
			}
		}
		else {
			$('.wide').removeClass('wide')
			catalogSlider.not('.slick-initialized').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				arrows: false,
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}]
			});
	
			setTimeout(function(){
				if(width > 768 && !$('.catalog_in-slider').hasClass('sm')){
					$('.catalog_in-slider').addClass('sm')
					$('.catalog_in-slider.xs').removeClass('xs')
					let sliderInSlider = document.querySelectorAll('.catalog_in-slider')
					sliderInSlider.forEach(item =>{
						$(item).slick('refresh')
					})
				} else if(width <= 768 && !$('.catalog_in-slider').hasClass('xs')){
					$('.catalog_in-slider').addClass('xs')
					$('.catalog_in-slider.sm').removeClass('sm')
					let sliderInSlider = document.querySelectorAll('.catalog_in-slider')
					sliderInSlider.forEach(item =>{
						$(item).slick('refresh')
					})
				}
				// slideInSlide()
				
				$('.catalog-slider .catalog_in-slider').on('mousedown touchmove', function(){
					let wrapperSlider = $(this).closest('.catalog-slider')[0]
						wrapperSlider.slick.setOption({
							swipe: false
						})
				})
				$('.catalog-slider .catalog_in-slider').on('afterChange', function(){
					let wrapperSlider = $(this).closest('.catalog-slider')[0]
					wrapperSlider.slick.setOption({
						swipe: true
					})
				});

			},700)
		}

		$('.catalog-item__cost').on('click', '.currience_title', function(){
			console.log(666)
			let thisParent = $(this).closest('.currience-choose')
			if($(this).hasClass('currience_title__active')){
				$(this).removeClass('currience_title__active')
				thisParent.find('.currience-in').slideUp(300)
			} else{
				$(this).addClass('currience_title__active')
				thisParent.find('.currience-in').slideDown(300)
				closeSubMenu()
			}
		})

		$('.catalog-item__cost').on('click', '.currience_item', function(){
			let thisParent = $(this).closest('.currience-choose')
			thisParent.find('.currience-in').slideUp(300)
			thisParent.find('.currience_item__active').removeClass('currience_item__active')
			$(this).addClass('currience_item__active')
			thisParent.find('.currience_title').text($(this).text())
			thisParent.find('.currience_title__active').removeClass('currience_title__active')
		})
		
	});


});