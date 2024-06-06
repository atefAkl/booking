let name = document.getElementById("name-register")
let email = document.getElementById("email-register")
let password = document.getElementById("passowrd-register")
let submit = document.getElementById("submit-register")

let tb = document.querySelector(".tbody")



let data = []

submit.addEventListener("click",function(){
    if(name.value===""||email.value===""|| password.value===""){

    }else {
        data.push({name:name.value,email:email.value,password:password.value})
    }
    console.log(data)
})


function drow(){
    data.forEach((items)=>{
        tb.innerHTML =  `<tr>
        <td>${items.name}</td>
        <td>${items.email}</td>
        <td>${items.password}</td>
        </tr>`
    })
}