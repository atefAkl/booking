const users = JSON.parse(localStorage.getItem('users')) || []

$(window).on('load', function () {
    console.log(localStorage.getItem('reg_user'))
    if (localStorage.getItem('reg_user')==1) {
        $('.user-buttons').addClass('hidden')
        $('#user-menu').removeClass('hidden')
        $('#user-menu > button span.username').html(localStorage.getItem('username'))
    }
})

// toggle user menu
$('#user-menu').on('click', function () {
    $('#user-menu ul').toggleClass('hidden')
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