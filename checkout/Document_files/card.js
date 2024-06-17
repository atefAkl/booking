$(document).on('keyup', '#cardNumber', ()=>{
    // console.log($('#cardNumber').val())
    const len = $('#cardNumber').val().length
    for (let i = 0; i < 16; i++) {
        if ($('#cardNumber').val()[i]) {
            $('#d'+(i+1)).html($('#cardNumber').val()[i])
        } else {
            $('#d'+(i+1)).html('X')
        }

    }
})
$(document).on('keyup', '#expiryYear', ()=>{
    
    $('#expiry-date').html($('#expiryYear').val())
})
$(document).on('keyup', '#cvv', ()=>{
    
    $('#card-cvv').html($('#cvv').val())
})
$(document).on('keyup', '#cardholderName', ()=>{
   
    $('#card-holder').html($('#cardholderName').val())
})

$('#cardNumber').on('keypress', (e)=> {
    if (isNaN(e.key)) return false
})

$('#expiryYear').on('keypress', (e)=> {
    const allowedChars = /[0-9\/]/;
    if (!allowedChars.test(e.key)) return false
})

$('#cvv').on('keypress', (e)=> {
    if (isNaN(e.key)) return false
})
