let name = document.querySelector(".name-login")
let password = document.querySelector(".password-login")
let submit = document.querySelector(".submit-login")
let spenar = document.querySelector(".fa-spinner")
let ss = document.querySelector(".ss")

let setName = localStorage.getItem("name")
let setPassword = localStorage.getItem("password")

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(name.value ==="" || password.value===""){
        alert("please enter your data")
    }else{
        if(setName && setName.trim() ===name.value && setPassword && setPassword.trim()===password.value ){
            localStorage.setItem("user", name.value)
            setTimeout(() => {
                ss.style.display = "none"
                spenar.style.display = "block"
            }, 500);
            setTimeout(() => {
                spenar.style.display = "none"
            submit.innerHTML = `<i class="fa-solid fa-check"></i>`
            }, 1500);
            setTimeout(() => {
                window.location = "index.html"
            }, 3000)
        }
        else {
            setTimeout(() => {
                ss.style.display = "none"
                spenar.style.display = "block"
            }, 500);
            setTimeout(() => {
                alert("thes is not your acount")
            },1500 );
            setTimeout(() => {
                ss.style.display = "block"
                spenar.style.display = "none"
            }, 1400);
        }
    }
})