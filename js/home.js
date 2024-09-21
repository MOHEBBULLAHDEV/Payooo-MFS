document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyForm =  document.getElementById('add-money-form');
    addMoneyForm.style.display = 'block';
    const cashOutForm = document.getElementById('cash-out-form');
 cashOutForm.style.display = 'none';

  })
  document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();
    const amountMoney = document.getElementById('amount-money').value;
    
    const pin = document.getElementById('pin').value;
   if (pin === '1234') {
    let availableBalance = document.getElementById('available-balance').innerText;
    let totalBalance = parseInt(availableBalance) + parseInt(amountMoney);
    document.getElementById('available-balance').innerText = totalBalance;
    
    
   }else{
    alert("wrong Pin")
   }


  })
  document.getElementById('btn-cash-out').addEventListener('click',function(){
    const cashOutForm = document.getElementById('cash-out-form');
   const addMoneyForm =  document.getElementById('add-money-form');
    addMoneyForm.style.display = 'none';
    cashOutForm.style.display = 'block';

  })
  document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    const cashOutPin = document.getElementById('cash-out-pin').value;
    let availableBalance = parseInt(document.getElementById('available-balance').innerText);
    let newBalance = availableBalance - cashOutAmount;
    if (cashOutPin === '1234') {
      document.getElementById('available-balance').innerText = newBalance;
      
    }else{
      alert("please Correct Input");
    }
  })