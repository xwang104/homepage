// Write any custom javascript functions here

//-----------------------navigation bar sticky and resize-------------------

    $('#nonresponsive-topbar').on('sticky.zf.stuckto:top', function(){
    $(this).addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function(){
    $(this).removeClass('shrink');
})
    $('#responsive-topbar').find('a').click(function() {
        $('#responsive-topbar').delay(500).fadeOut();
    })
