$('#confirmPayment').click(()=>{
    if ($('#cardNumber').val() == '' || $('#cardholderName').val() == '' || $('#expiryYear').val() == '' || $('#cvv').val() == '') {
        alert('من فضلك املأ الحقول المطلوبة')
    } else {
        if (confirm('سوف يتم الخصم من رصيدك مبلغ :' + $('#totalPrice').html() + ' $')) {
            
            var bookedFlights = JSON.parse(localStorage.getItem('bookedFlights')) || []
            bookedFlights = [...bookedFlights, pickedFlight]

            localStorage.setItem('bookedFlights', JSON.stringify(bookedFlights))
        }
        goTo('/')
    }
})