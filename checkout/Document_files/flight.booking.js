$(document).ready(()=>{
    var bookedTickets = JSON.parse(localStorage.getItem('bookedTickets')) || []
    const theAdultsCount = $('#adultCount').text()
    for(let i = 0; i<theAdultsCount; i++){
        const formText = 
            `
                <div class="input-group mb-2">
                    <label for="adultName" class="input-group-text">الاسم</label>
                    <input type="text" class="form-control" id="adultName">
                    <label for="adultEmail" class="input-group-text">البريد الالكترونى</label>
                    <input type="text" class="form-control" id="adultEmail">
                </div>
                <div class="input-group mb-2">
                    <label for="adultPhone" class="input-group-text">رقم الهاتف</label>
                    <input type="text" class="form-control" id="adultPhone">
                    <label for="adultNatId" class="input-group-text">الرقم القومى</label>
                    <input type="text" class="form-control" id="adultNatId">
                    <input type="submit" class="input-group-text" id="addAdultTicket" value="اضافة"/>
                </div>
            `
        $('#adultsForm').html(formText)
    }

    const theChildrenCount = $('#childrenCount').text()
    for(let i = 0; i<theChildrenCount; i++){
        const formText = 
            `
                <div class="input-group mb-2">
                    <label for="childName" class="input-group-text">الاسم</label>
                    <input type="text" class="form-control" id="childName">
                    <label for="childNatId" class="input-group-text">الرقم القومى</label>
                    <input type="text" class="form-control" id="childNatId">
                    <input type="submit" class="input-group-text" id="addChildTicket" value="اضافة"/>
                </div>
            `
            $('#childrenForm').html(formText)
        }
        
        const theBabiesCount = $('#babiesCount').text()
        for(let i = 0; i<theChildrenCount; i++){
            const formText = 
            `
            <div class="input-group mb-2">
            <label for="babyName" class="input-group-text">الاسم</label>
            <input type="text" class="form-control" id="babyName">
            <label for="babyNatId" class="input-group-text">الرقم القومى</label>
            <input type="text" class="form-control" id="babyNatId">
            <input type="submit" class="input-group-text" id="addBabyTicket" value="اضافة"/>
            </div>
            `
        $('#babiesForm').html(formText)
    }
    
    if ($('#addAdultTicket') != null) {
        $('#addAdultTicket').on('click', () => {
            if ($('#adultName').val() == '' || $('#adultEmail').val() == '' || $('#adultPhone').val() == '' || $('#adultNatId').val() == '') {
                alert('برجاء تعبئة الحقول المطلوبة')
            } else {
                const bookedTicket = {
                    ...pickedFlight,
                    name: $('#adultName').val(),
                    email: $('#adultEmail').val(),
                    phone: $('#adultPhone').val(),
                    natId: $('#adultNatId').val(),
                }
                bookedTickets = [...bookedTickets, bookedTicket]
                localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets))
                $('#addAdultTicket').css('display', 'none')
            }
        }) 
    }
    if ($('#addChildTicket') != null) {
        $('#addChildTicket').on('click', () => {
            if ($('#childName').val() == '' || $('#childEmail').val() == '' || $('#childPhone').val() == '' || $('#childNatId').val() == '') {
                alert('برجاء تعبئة الحقول المطلوبة')
            } else {
                const bookedTicket = {
                    ...pickedFlight,
                    name: $('#childName').val(),
                    natId: $('#childNatId').val(),
                }
                bookedTickets = [...bookedTickets, bookedTicket]
                localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets))
                $('#addChildTicket').css('display', 'none')
            }
        }) 
    }
    if ($('#addBabyTicket') != null) {
        $('#addBabyTicket').on('click', () => {
            if ($('#babyName').val() == '' || $('#babyEmail').val() == '' || $('#babyPhone').val() == '' || $('#babyNatId').val() == '') {
                alert('برجاء تعبئة الحقول المطلوبة')
            } else {
                const bookedTicket = {
                    ...pickedFlight,
                    name: $('#babyName').val(),
                    natId: $('#babyNatId').val(),
                }
                bookedTickets = [...bookedTickets, bookedTicket]
                localStorage.setItem('bookedTickets', JSON.stringify(bookedTickets))
                $('#addBabyTicket').css('display', 'none')
            }
        }) 
    }

    console.log(bookedTickets)
})
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
        if (confirm('سوف يتم الخصم من رصيدك مبلغ :' + $('#totalPrice').html() + ' $')) {
            
            $('#authenticating').addClass('show')
            setTimeout(() => {
                $('#authenticating').removeClass('show')
                goTo('/pages/profile.html')
            }, 3000);
        }
    }
})

