    

const usd = 5
var discount = serviceItem.offer ? serviceItem.offer.amount : 0
console.log(discount)
var stayInDays = 1;
var children = 0;
var adults = 1;
var youngs = 0;
var roomsCount = 1;
var totalStayAfterDiscount, totalMealsCost = 0, addonsCost=0;
$('#daysCount').html(stayInDays);
$('#youngCount').html(youngs);
$('#childrenCount').html(children);
$('#adultCount').html(adults);
$('#roomsCount').html(roomsCount);
$('#roomsCount').attr('data-max', serviceItem.remain);
$('#total-stay').html(serviceItem.max.toFixed(2)*usd)
$('#total-meals').html('0.00')
$('#total-addons').html('0.00')
$('#total').html(serviceItem.max.toFixed(2)*usd)
$('#totalAfterDiscount').html((usd*serviceItem.max-usd*serviceItem.max*discount/100).toFixed(2))

$('.changeDayCount').on('click', function() {
    let current = +($('#daysCount').html())
    let changeValue = +($(this).attr('data-count'))
    let tot = current + changeValue
    if (tot < $('#daysCount').attr('data-min')) return
    stayInDays = current + changeValue

    $('#daysCount').html(stayInDays)
    $('#nightsCount').html(stayInDays-1)
})


$('.changeYoungsCount').on('click', function() {
    let current = +($('#youngCount').html())
    let changeValue = +($(this).attr('data-count'))
    let tot = current + changeValue
    if (tot < $('#youngCount').attr('data-min')) return
    youngs = current + changeValue
    $('#youngCount').html(youngs)
    var youngsForms = ''

        let i =0
        for(;i<youngs;){
        const formText = 
            `
            <div class="input-group mb-2">
            <label class="input-group-text">${i+1}</label>
            <label for="name_${i}" class="input-group-text">الاسم</label>
            <input type="text" class="form-control" id="name_${i}">
            <label for="natId_${i}" class="input-group-text">الرقم القومى</label>
            <input type="text" class="form-control" id="natId_${i}">
            </div>
            `
            youngsForms += formText
            i++
        }
        $('#youngsForm').html(youngsForms)
        console.log(youngsForms)
    
})

$('.changeChildrenCount').on('click', function() {
    let current = +($('#childrenCount').html())
    let changeValue = +($(this).attr('data-count'))
    let tot = current + changeValue
    if (tot < $('#childrenCount').attr('data-min')) return
    children = current + changeValue

    $('#childrenCount').html(children)
    var childrenForms = ''
        let i =0
        for(;i<children;){
        const formText = 
            `
            <div class="input-group mb-2">
            <label class="input-group-text">${i+1}</label>
            <label for="name_${i}" class="input-group-text">الاسم</label>
            <input type="text" class="form-control" id="name_${i}">
            <label for="natId_${i}" class="input-group-text">الرقم القومى</label>
            <input type="text" class="form-control" id="natId_${i}">
            </div>
            `
            childrenForms += formText
            i++
        
        }
        $('#childrenForm').html(childrenForms)
        console.log(childrenForms)
})

$('.changeAdultCount').on('click', function() {
    let current = +($('#adultCount').html())
    let changeValue = +($(this).attr('data-count'))
    let tot = current + changeValue
    if (tot < $('#adultCount').attr('data-min')) return
    adults = current + changeValue
    $('#adultCount').html(adults)
    var adultsForms = ''

        let i =1
        for(;i<adults;){
        const formText = 
            `
            <div class="input-group mb-2">
            <label class="input-group-text">${i+1}</label>
            <label for="name_${i}" class="input-group-text">الاسم</label>
            <input type="text" class="form-control" id="name_${i}">
            <label for="natId_${i}" class="input-group-text">الرقم القومى</label>
            <input type="text" class="form-control" id="natId_${i}">
            </div>
            `
            adultsForms += formText
            i++
        

        $('#adultsForm').html(adultsForms)
        console.log(adultsForms)
    }
})

$('.changeRoomsCount').on('click', function() {
    let current = +($('#roomsCount').html())
    let changeValue = +($(this).attr('data-count'))
    let tot = current + changeValue
    if (tot < $('#roomsCount').attr('data-min')||tot > $('#roomsCount').attr('data-max')) return
    roomsCount = current + changeValue
    $('#roomsCount').html(roomsCount)
    
})

$(document).click(()=>{
    var stayInDaysCost = stayInDays * serviceItem.max * roomsCount  * usd
    $('#total-stay').html(stayInDaysCost.toFixed(2))
    
    const childrenMealsCost = (+calcCostFor('#breakfast') + +calcCostFor('#lunch') + +calcCostFor('#dinner')) * children*0.5
    const adultsMealsCost = (+calcCostFor('#breakfast') + +calcCostFor('#lunch') + +calcCostFor('#dinner')) * adults
    totalMealsCost = childrenMealsCost + adultsMealsCost
    $('#total-meals').html(totalMealsCost.toFixed(2))
    
    const selectedAddon = +$('input[name="addons"]:checked').attr('data-cost')||0;
    const addonsCost = +(selectedAddon)*stayInDays*stars/1.5
    $('#total-addons').html(addonsCost.toFixed(2))
    
    
    
    var total = stayInDaysCost + totalMealsCost + addonsCost;
    console.log(stayInDaysCost, totalMealsCost, addonsCost)

    totalStayAfterDiscount = stayInDaysCost - stayInDaysCost * discount/100
    $('#total').html(total.toFixed(2))
    
    var totalAfterDiscount = (totalStayAfterDiscount + totalMealsCost + addonsCost);
    $('#totalAfterDiscount').html(totalAfterDiscount.toFixed(2))
})

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


