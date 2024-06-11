const users = JSON.parse(localStorage.getItem('users')) || []

$(window).on('load', function () {
    // console.log(localStorage.getItem('reg_user'))
    if (localStorage.getItem('reg_user')==1) {
        $('.user-buttons').addClass('hidden')
        $('#user-menu').removeClass('hidden')
        $('#user-menu > button span.username').html(localStorage.getItem('username'))
    } 
})

tripCities.forEach((city)=>{
  $('#city').append(`<option value="${city.id}">${city.arabicName}</option>`)
})
 
$('#swap').on('click',() => {
  localStorage.setItem('dep', $('#departure').val())
  $('#departure').val($('#destination').val())
  $('#destination').val(localStorage.getItem('dep'))
})

// toggle user menu
$('#user-menu').on('click', function () {
    $('#user-menu ul').toggleClass('hidden')
})

$('#close-result-info').on('click', ()=>{
  $($('#close-result-info').attr('data-bs-dismiss')).removeClass('show')
  $('body').removeClass('freeze')
})

$('#logout').click(function (e) {
  e.preventDefault();
  localStorage.setItem('reg_user', 0)
  window.location.href='/'
})




//Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Toasts
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

// trigger toasts
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

$(document).ready(function() {
  const $childContent = $('.booking');
  const $parentSection = $childContent.closest('#booking-section');
  
  // تغيير الرتفاع للأب مع تغير ارتفاع الابن
  $childContent.on('DOMSubtreeModified', function() {
    adjustParentHeight();
  });
  
  // الحفاظ على ارتفاع ديناميكى للقسم مع تغير المحتوى بداخله
  function adjustParentHeight() {
    const childHeight = $childContent.height();
    $parentSection.css('height', childHeight + 50 + 'px');
  }
  
  // تعيين الارتفاع عن تحميل الصفحة
  adjustParentHeight();
});