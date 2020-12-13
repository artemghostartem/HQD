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
        if ($('.mango').length <1 ) {
        	updateBuscet('HQD Cuvie - Iced mango', '199', 'img/mango.png', 'mango');
        } 
        removingProducts();
        numbering('.mango');
        
    })
    $('.products-main-element:nth-child(2) .button').on('click', function() {
        if ($('.strawberry').length <1 ) {
        	updateBuscet('HQD Cuvie - Strawberry', '199', 'img/strawberry.png', 'strawberry');
        } 
        removingProducts();
        numbering('.strawberry');
        
    })
    $('.products-main-element:nth-child(3) .button').on('click', function() {
        if ($('.tobacco').length <1 ) {
        	updateBuscet('HQD Cuvie - Nut tobacco', '199', 'img/nuts.png', 'tobacco');	
            // getTotalPrice()
        } 
        removingProducts();
        numbering('.tobacco');
        
    })
    $('.products-main-element:nth-child(4) .button').on('click', function() {
        if ($('.Blueberry').length <1 ) {
        	updateBuscet('HQD Cuvie - Blueberry', '199', 'img/blueberry.png', 'Blueberry');
        
        } 
        removingProducts();
        numbering('.Blueberry');
       
    })
    $('.products-main-element:nth-child(5) .button').on('click', function() {
        if ($('.cola').length <1 ) {
            updateBuscet('HQD Cuvie - Cola iced', '199', 'img/cola.png', 'cola');
        
        } 
        removingProducts();
        numbering('.cola');
       
    })
    $('.products-main-element:nth-child(6) .button').on('click', function() {
        if ($('.peach').length <1 ) {
            updateBuscet('HQD Cuvie - Peach iced', '199', 'img/ice_peach.png', 'peach');
        
        } 
        removingProducts();
        numbering('.peach');
       
    })
    $('.products-main-element:nth-child(7) .button').on('click', function() {
        if ($('.gum').length <1 ) {
            updateBuscet('HQD Cuvie - Bubble gum', '199', 'img/bubble.png', 'gum');
        
        } 
        removingProducts();
        numbering('.gum');
       
    })
     $('.products-main-element:nth-child(8) .button').on('click', function() {
        if ($('.mint').length <1 ) {
            updateBuscet('HQD Cuvie - Ice mint', '199', 'img/mint.png', 'mint');
        
        } 
        removingProducts();
        numbering('.mint');
       
    })
      $('.products-main-element:nth-child(9) .button').on('click', function() {
        if ($('.mixed').length <1 ) {
            updateBuscet('HQD Cuvie - Mixed fruit', '199', 'img/mixed.png', 'mixed');
        
        } 
        removingProducts();
        numbering('.mixed');
       
    })
       $('.products-main-element:nth-child(10) .button').on('click', function() {
        if ($('.grapey').length <1 ) {
            updateBuscet('HQD Cuvie - Grapey', '199', 'img/grape.png', 'grapey');
        
        } 
        removingProducts();
        numbering('.grapey');
       
    })

    $('.buscet .close, .header-main-right img').on('click', function() {
    	$('.buscet').toggleClass('active')
    })

    $('.popup-on-buy .button').on('click', function() {
        $('.buscet').addClass('active')
    })

});