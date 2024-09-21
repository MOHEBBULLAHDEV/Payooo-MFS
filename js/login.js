document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;
    console.log(phoneNumber);
    console.log(pinNumber);
    if (phoneNumber === '5' && pinNumber === '1234') {
        document.location.href = 'home.html'
        
    }else{
        alert('Please Enter correct PIn or Phone Number')
    }
})