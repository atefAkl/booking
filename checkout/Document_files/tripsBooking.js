
const reg_user = JSON.parse(localStorage.getItem('reg_user'))

function promptForCode() {
    let code = prompt('من فضلك ادخل الرمز الذى تم ارساله على هاتفك المسجل لدى البنك') 
    if (!/^\d{4}$/.test(code)) {
    alert("كود التحقق غير صحيح. يجب إدخال 4 أرقام فقط.");
    promptForCode(); // Prompt again if invalid
    return;
  }
  return code;
}

$('#confirmPayment').click(()=>{
    if ($('#cardNumber').val() == '' || $('#cardholderName').val() == '' || $('#expiryYear').val() == '' || $('#cvv').val() == '') {
        alert('من فضلك املأ الحقول المطلوبة')
    } else {
        promptForCode()
            
        if (confirm('تم التحقق بنجاح، سوف يتم الخصم من رصيدك مبلغ :' + $('#totalAfterDiscount').html() + ' EGP')) {
            
            const bookedHotel = {
                user: reg_user.email, 
                hotelId: hotelParams.get('id'),
                serviceId: hotelParams.get('serviceIndex'),
                stayInDays,
                roomsCount,
                
                selectedMeals: [$('#breakfast').is(':checked')? true:false,$('#lunch').is(':checked')? true:false,$('#dinner').is(':checked')? true:false],
                
                selectedAddons: $('#trans').is(':checked')? 'trans':$('#car').is(':checked')? 'car': null,
                
                passengers: {
                    youngs,
                    children,
                    adults
                }
            }
            bookedHotels = [...bookedHotels, bookedHotel]
            localStorage.setItem('bookedHotels', JSON.stringify(bookedHotels))
            $('#authenticating').addClass('show')
            setTimeout(() => {
                $('#authenticating').removeClass('show')
                window.location.href = '/pages/profile.html'
            }, 3000);
        } else {return false}

        
        
    }
})


var calcCostFor = (selector)=>{
    let cost = 0;
    if($(selector).is(':checked')) {
        cost=+($(selector).attr('data-cost'))
    }
    return (cost*stars).toFixed(2)*stayInDays
}

const changeQtyBtns = document.querySelectorAll('.changeQty')
changeQtyBtns.forEach((btn)=>{
    btn.addEventListener( 'click', ()=>{
        var targetElement = document.querySelector(btn.getAttribute('data-target'))
        var amount = +(targetElement.innerHTML)
        var inc = +(btn.getAttribute('data-count'))
        var tar = amount + inc
        if (tar < targetElement.getAttribute('data-min')) return
        targetElement.innerHTML = tar
    })
})


