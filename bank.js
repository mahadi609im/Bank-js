function getInputId(inputId) {
   let inputField = document.getElementById(inputId)
   let inputStrValue = inputField.value
   let inputValue = parseFloat(inputStrValue)
   inputField.value = ''
   return inputValue
}

function getElementId(elementId) {
   let element = document.getElementById(elementId)
   let elementStrValue = element.innerText
   let elementValue = parseFloat(elementStrValue)
   return elementValue
}

function setAmount(elementId, elementValue){
   let element = document.getElementById(elementId)
   element.innerText = elementValue
}

function setBalenceAmount(elementId, elementValue){
   let element = document.getElementById(elementId)
   element.innerText = elementValue
}

function resetInputFunc(inputId){
   let inputField = document.getElementById(inputId)
   inputField.value = ''
}


document.getElementById('deposit-submit').addEventListener("click", ()=>{
   let newDepositInputAmount = getInputId('deposit-input')
   if (isNaN(newDepositInputAmount)) {
      alert('please need input value')
      return;
   }
   let oldDepositAmount = getElementId('deposit-amount')
   setAmount('deposit-amount', newDepositInputAmount)
   
   
   let oldBalanceAmount = getElementId('balence-amount')
   let newDepositBalenceAmount = oldBalanceAmount + newDepositInputAmount
   setBalenceAmount('balence-amount', newDepositBalenceAmount)
})

document.getElementById('deposit-reset').addEventListener("click", ()=>{
   let depositReset = resetInputFunc('deposit-input')
})


document.getElementById('withdraw-submit').addEventListener("click", ()=>{
   let newWithdrawInputAmount = getInputId('withdraw-input')
   if (isNaN(newWithdrawInputAmount)) {
      alert('please need input value')
      return
   }
   let oldWithdrawAmount = getElementId('withdraw-amount')
   setAmount('withdraw-amount', newWithdrawInputAmount)
   
   
   let oldBalanceAmount = getElementId('balence-amount')
   let newWithdrayBalenceAmount = oldBalanceAmount - newWithdrawInputAmount
   setBalenceAmount('balence-amount', newWithdrayBalenceAmount)
})

document.getElementById('withdraw-reset').addEventListener("click", ()=>{
   let withdrawReset = resetInputFunc('withdraw-input')
})

