
$ (document).ready(function() { 

    function showModal(){
    $('#modal-display').show()
    $('html body').css('overflow', 'hidden');
    }
    showModal();

    function hideModal(){
        $('#modal-display').hide()   
    }
    $('#close-modal').click(function(){
    hideModal();
    })
});


