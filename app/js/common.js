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

    $('.products-main-element:nth-child(1) .button').on('click', function() {
        if ($('.golubika').length <1 ) {
        	updateBuscet('HQD Cuvie - С голубикой', '500', 'img/buscet-product.png', 'golubika');	
        } 
        removingProducts();
        numbering();
    })
    $('.products-main-element:nth-child(2) .button').on('click', function() {
        if ($('.klubnika').length <1 ) {
        	updateBuscet('HQD Cuvie - С клубникой', '500', 'img/buscet-product.png', 'klubnika');	
        } 
        removingProducts();
        numbering();
    })
    $('.products-main-element:nth-child(3) .button').on('click', function() {
        if ($('.myata').length <1 ) {
        	updateBuscet('HQD Cuvie - С мятой', '500', 'img/buscet-product.png', 'myata');	
        } 
        removingProducts();
        numbering();
    })
    $('.products-main-element:nth-child(4) .button').on('click', function() {
        if ($('.ananas').length <1 ) {
        	updateBuscet('HQD Cuvie - С ананасом', '500', 'img/buscet-product.png', 'ananas');	
        } 
        removingProducts();
        numbering();
    })

    $('.buscet .close, .header-main-right').on('click', function() {
    	$('.buscet').toggleClass('active')
    })

});