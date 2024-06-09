
$('#submit-register').on("click",function(e){
    e.preventDefault()
    
    if($('#reg_username').val() == '' || $('#reg_email').val() == '' || $('#reg_password').val()==''){
        $('#errMessage').html('برجاء تعبئة الحقول المطلوبة')
        setTimeout(() => {
            $('#liveToastBtn').click()
                return false
        }, 100);
        
    }else{
        var the_password = ''
        if ($('#reg_password').val() === $('#reg_cPassword').val()) {
            the_password = $('#reg_password').val()
        } else {
            $('#errMessage').html('يجب أن تساوى قيمة حقل كلمة المرور مع حقل تأكيد كلمة المرور')
            setTimeout(() => {
                $('#liveToastBtn').click()
                return false
            }, 100);
        }

        var now = new Date().toLocaleString('en-EG')
        const user = {
            username: $('#reg_username').val(),
            email: $('#reg_email').val(),
            password: the_password,
            created_at: now
        }
         
        var foundUser = null
        if (users.length != 0) {
            foundUser = users.find((u)=>{return u.email == user.email})            
        }
        console.log(foundUser)
        if (foundUser != null) {
            $('#errMessage').html('البريد الالكترونى مستخدم بالفعل')
            setTimeout(() => {
                $('#liveToastBtn').click()
                return false
            }, 100);
        } else {
            const usersToSave = [...users, user]
            localStorage.setItem('users', JSON.stringify(usersToSave))
            $('#errMessage').html('تهانينا، لقد تم تسجيل حسابك يمكنك تسجيل الدخول')
            $('#liveToastBtn').click()
            setTimeout(() => {
                window.location.href='/index.html'
            }, 1500);
        }
    }
})

$('#submitLogin').on('click', function () {
    
    if (null == users || users.length == 0) {
        $('#errMessage').html('انت غير مسجل لدينا')
        setTimeout(() => {
            $('#liveToastBtn').click()
                return false
        }, 100);
    }

    if ($('#email').val() == '') {
        $('#errMessage').html('ادخل اسم المستخدم')
        setTimeout( async() => {
            $('#liveToastBtn').click()
            return false
        }, 100);
    }
    if ($('#password').val() == '') {
        $('#errMessage').html('ادخل كلمة المرور')
        setTimeout(() => {
            $('#liveToastBtn').click()
                return false
        }, 100);
    }

    const registered = users.find((u)=>{
        return u.email == $('#email').val() && u.password == $('#password').val()
    })
    console.log(undefined != registered)
     if (undefined != registered) {
            now = new Date().toLocaleString('en-EG')
            localStorage.setItem('reg_user', 1)
            localStorage.setItem('username', registered.username)
            localStorage.setItem('email', registered.email)
            localStorage.setItem('login_time', now)
            console.log('if sector')
            $('#errMessage').html('مرحبا بك '+registered.username+' مرة أخرى، تم تسجيل دخولك بنجاح.')
            $('#liveToastBtn').click()
        
            setTimeout(() => {
                window.location.href ='/index.html'
            }, 3000);
        } else {
            
            $('#errMessage').html('البريد المستخدم أو كلمة المرور غير صحيح')
            setTimeout(() => {
                $('#liveToastBtn').click()
                    return false
            }, 100);
            console.log('else sector')
        } 
    
})
