$(function() {
    //buscet number-counter
    function numbering(fruct) {
        let fructNext = `${fruct}-next`;
        $(fructNext).on('click', function () {
           $(this).prev().val(+$(this).prev().val() + 1);
           // console.log('hi')
        });

        let fructPrev = `${fruct}-prev`;
        $(fructPrev).on('click', function () {
           if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
           // console.log('hi')
        });
    }    

    //buscet removing
    function removingProducts(fruct) {
        let removeButton = $('.remove')
        for (let i = 0; i < removeButton.length; i++) {
            removeButton[i].addEventListener('click', function() {
                $(this).parents('.form-product').remove()
                // getTotalPrice() 
            })
        }
        fruct = true
    }   

    //buscetupdate
    function updateBuscet(name, price, photo, fruct) {
        	let productCart = document.querySelector('.form-product')

	        let cloneProductCart = productCart.cloneNode(true)
			cloneProductCart.style.display = 'flex'
	        //changeName
	        let cloneName = $(cloneProductCart).find('.name')
	        cloneName.html(name)

	        //cnahgePrice
	        let clonePrice = $(cloneProductCart).find('.price')
	        clonePrice.html(price)

	        //changeImage
	        let clonePhoto = $(cloneProductCart).find('.photo')
	        clonePhoto.attr("src", photo)

	        let inputName = $(cloneProductCart).find('.nameInput')
	        inputName.attr("value", fruct);
	        inputName.attr("name", fruct);
	        inputName.addClass(fruct)

            let inputNumber = $(cloneProductCart).find('.numberInput')
            inputNumber.attr("name", fruct);
            

            let minusInput = $(cloneProductCart).find('.qty-minus')
            minusInput.addClass(`${fruct}-prev`)

            let plusInput = $(cloneProductCart).find('.qty-plus')
            plusInput.addClass(`${fruct}-next`)

	        productCart.after(cloneProductCart)

    }

    //popup after "buy" click
    function onBuyPopup() {
        let popup = document.querySelector('.popup-on-buy')
        let buscet = document.querySelector('.buscet')
        if (!buscet.classList.contains('active')) {
            popup.classList.add('active')
        setTimeout(function(){
            popup.classList.remove('active')
        }, 4000)
        }
        
    }

    //pagescroll2id
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: function(){
            return offsetCustom()
        }
    });

    function offsetCustom() {
        let header = document.querySelector('header')
        let offset = header.offsetHeight-1
        return offset;
    }

    //screen change in form
    function screenChange() {
        $('.form-product').addClass('inactive')
        $('.form-down').addClass('inactive')
        setTimeout(function(){
            $('.form-next-step').addClass('active')
        }, 300)
        
    }

    $('.form-down .button').on('click', function(){
        screenChange()
    })
    $(document).on('click',function(){
        let productsInBuscet = document.querySelectorAll('.form-product')

        if(productsInBuscet.length > 1) {
            $('.form-down').addClass('active')
        } else {
            $('.form-down').removeClass('active')
        }
    })


    //mobile-menu
    $('.burger, .mobile-menu a').on('click',function () {
        event.preventDefault()
        $('.burger').toggleClass('active-menu')
        $('.mobile-menu').toggleClass('active')

    })
    $('.products-main-element .button').on('click',function() {
        onBuyPopup();
    })

    $('.popup-on-buy').on('click',function() {
        $('.popup-on-buy').removeClass('active');
    })

    $('.products-main-element:nth-child(1) .button').on('click', function() {
        if ($('.blue-razz-lemonade').length <1 ) {
        	updateBuscet('KATANA PUFF BLUE RAZZ LEMONADE', '199', 'img/stick/blue-lemonade.png', 'blue-razz-lemonade');
        } 
        removingProducts();
        numbering('.blue-razz-lemonade');
        
    })
    $('.products-main-element:nth-child(2) .button').on('click', function() {
        if ($('.Grape').length <1 ) {
        	updateBuscet('KATANA PUFF Grape', '199', 'img/stick/grape.png', 'Grape');
        } 
        removingProducts();
        numbering('.Grape');
        
    })
    $('.products-main-element:nth-child(3) .button').on('click', function() {
        if ($('.kiwi').length <1 ) {
        	updateBuscet('KATANA PUFF KIWI PASSION', '199', 'img/stick/kiwi.png', 'kiwi');	
            // getTotalPrice()
        } 
        removingProducts();
        numbering('.kiwi');
        
    })
    $('.products-main-element:nth-child(4) .button').on('click', function() {
        if ($('.pink-lemonare').length <1 ) {
        	updateBuscet('KATANA PUFF PINK LEMONADE', '199', 'img/stick/pink-lemonade.png', 'pink-lemonare');
        
        } 
        removingProducts();
        numbering('.pink-lemonare');
       
    })
    $('.products-main-element:nth-child(5) .button').on('click', function() {
        if ($('.mango').length <1 ) {
            updateBuscet('KATANA PUFF Mango', '199', 'img/stick/mango.png', 'mango');
        
        } 
        removingProducts();
        numbering('.mango');
       
    })
    $('.products-main-element:nth-child(6) .button').on('click', function() {
        if ($('.blueberry').length <1 ) {
            updateBuscet('KATANA PUFF Blueberry', '199', 'img/stick/blueberry.png', 'blueberry');
        
        } 
        removingProducts();
        numbering('.blueberry');
       
    })
    $('.products-main-element:nth-child(7) .button').on('click', function() {
        if ($('.red-bull').length <1 ) {
            updateBuscet('KATANA PUFF RED BULL', '199', 'img/stick/red-bull.png', 'red-bull');
        
        } 
        removingProducts();
        numbering('.red-bull');
       
    })
     $('.products-main-element:nth-child(8) .button').on('click', function() {
        if ($('.watermelon').length <1 ) {
            updateBuscet('KATANA PUFF WATERMELON', '199', 'img/stick/watermelon.png', 'watermelon');
        
        } 
        removingProducts();
        numbering('.watermelon');
       
    })
      $('.products-main-element:nth-child(9) .button').on('click', function() {
        if ($('.strawberry-banana').length <1 ) {
            updateBuscet('KATANA PUFF STRAWBERRY BANANA', '199', 'img/stick/strawberry-banana.png', 'strawberry-banana');
        
        } 
        removingProducts();
        numbering('.strawberry-banana');
       
    })
       $('.products-main-element:nth-child(10) .button').on('click', function() {
        if ($('.banana').length <1 ) {
            updateBuscet('KATANA PUFF BANANA ICE', '199', 'img/stick/banana.png', 'banana');
        
        } 
        removingProducts();
        numbering('.banana');
       
    })
    $('.products-main-element:nth-child(11) .button').on('click', function() {
        if ($('.cola').length <1 ) {
            updateBuscet('KATANA PUFF Cola', '199', 'img/stick/cola.png', 'cola');
        
        } 
        removingProducts();
        numbering('.cola');
       
    })

    $('.buscet .close, .header-main-right img').on('click', function() {
    	$('.buscet').toggleClass('active')
    })

    $('.popup-on-buy .button').on('click', function() {
        $('.buscet').addClass('active')
    })

});