$(function() {
    //buscet number-counter

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

    //buscet removing
    let removeButton = document.querySelectorAll('.remove')
    
    for( let i =0; i < removeButton.length; i++ ) {
    	removeButton[i].addEventListener('click', function(){
    		removeButton[i].parents('form-product').remove()
    	})
    }
    

});