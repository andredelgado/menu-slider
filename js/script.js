$( document ).ready(function() {
    $('#menu-trigger').click(function() {
        if($('.sidebar').hasClass('hidden')) {       
            $('.sidebar').removeClass('hidden');
        }
        else{
            $('.sidebar').addClass('hidden');
        }
        
        if($('.btn').hasClass('moveBtn')) {       
            $('.btn').removeClass('moveBtn');
        }
        else{
            $('.btn').addClass('moveBtn');
        }
    });
});