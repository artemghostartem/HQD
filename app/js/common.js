$(function() {
    //buscet number-counter
    function numbering() {
    	$('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
	    });
	    $('.plus').click(function() {
	        var $input = $(this).parent().find('input');
	        $input.val(parseInt($input.val()) + 1);
	        $input.change();
	        return false;
	    });
    }
    

    //buscet removing
    function removingProducts(fruct) {
        let removeButton = $('.remove')
        for (let i = 0; i < removeButton.length; i++) {
            removeButton[i].addEventListener('click', function() {
                $(this).parents('.form-product').remove()
                getTotalPrice() 
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
        }, 8000)
        }
        
    }


    //total prive
    let totalprice = 0
    function getTotalPrice() {
        let prices = document.querySelectorAll('.form-product-right .price')
        let totalPricePlace = $('.totalprice')
        for( i = 0 ; i < prices.length; i++) {
            
            totalprice = +totalprice + +prices[i].textContent
            
            
        }
        totalPricePlace.html(totalprice);
        totalprice = 0
        console.log(totalprice)
    }


    //pagescroll2id
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: function(){
            return offsetCustom()
        }
    });
    function offsetCustom() {
        let header = document.querySelector('header')
        let offset
        // if (window.innerWidth > 768) {
        //     offset = header.offsetHeight-1
        // } else {
        //     offset = 0 
        // }
        offset = header.offsetHeight-1
        return offset;
    }

    //screen change in form
    function screenChange() {
        $('.form-product').addClass('inactive')
        $('.form-down').addClass('inactive')
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


    $('.products-main-element .button').on('click',function() {
        onBuyPopup();
    })

    $('.popup-on-buy').on('click',function() {
        $('.popup-on-buy').removeClass('active');
    })

    $('.products-main-element:nth-child(1) .button').on('click', function() {
        if ($('.golubika').length <1 ) {
        	updateBuscet('HQD Cuvie - Blueberry', '500', 'img/Blueberry.png', 'golubika');
            getTotalPrice()	
        } 
        removingProducts();
        numbering();
        
    })
    $('.products-main-element:nth-child(2) .button').on('click', function() {
        if ($('.klubnika').length <1 ) {
        	updateBuscet('HQD Cuvie - Strawberry', '500', 'img/strawberry.png', 'klubnika');
            getTotalPrice()	
        } 
        removingProducts();
        numbering();
        
    })
    $('.products-main-element:nth-child(3) .button').on('click', function() {
        if ($('.myata').length <1 ) {
        	updateBuscet('HQD Cuvie - Mint', '500', 'img/mint.png', 'myata');	
            getTotalPrice()
        } 
        removingProducts();
        numbering();
        
    })
    $('.products-main-element:nth-child(4) .button').on('click', function() {
        if ($('.ananas').length <1 ) {
        	updateBuscet('HQD Cuvie - Pienapple', '500', 'img/pienapple.png', 'ananas');
             getTotalPrice()	
        } 
        removingProducts();
        numbering();
       
    })

    $('.buscet .close, .header-main-right img').on('click', function() {
    	$('.buscet').toggleClass('active')
    })

    $('.popup-on-buy .button').on('click', function() {
        $('.buscet').addClass('active')
    })

});