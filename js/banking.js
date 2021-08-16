// get input from input field
function inputValue(input) {
    const inputField = document.getElementById(input);
    const inputAmount = parseFloat(inputField.value);
    // clear input value
    inputField.value = '';
    return inputAmount;
}
// update total amount
function totalAmountField(totalFieldId, amount) {
    const amountTotal = document.getElementById(totalFieldId);
    const totalText = amountTotal.innerText
    const previousTotal = parseFloat(totalText);
    amountTotal.innerText = amount + previousTotal;
}

// update current amount field
function currentAmount(amount, isAdd) {
    const currentBalance = document.getElementById('current-balence');
    const newCurrentValue = currentBalance.innerText;
    const currentFloatBalance = parseFloat(newCurrentValue);
    if (isAdd) {
        currentBalance.innerText = currentFloatBalance + amount;
    }
    else {
        currentBalance.innerText = currentFloatBalance - amount;
    }
}


// deposit and update total balence
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const newDepositAmount = inputValue('deposit-amount');
    // // update deposit total
    if (newDepositAmount > 0) {
        totalAmountField('total-deposit', newDepositAmount);
        currentAmount(newDepositAmount, true);
    }

});

// withdrow and update total balence
document.getElementById('withdrow-button').addEventListener('click', function () {
    // get element from input
    const newWithdrowAmount = inputValue('withdrow-amount');
    const currentBalance = parseFloat(document.getElementById('current-balence').innerHTML);
    // get element from total withdrow   
    if (newWithdrowAmount > 0 && currentBalance > newWithdrowAmount) {
        totalAmountField('total-widhdrow', newWithdrowAmount);
        // update balence
        currentAmount(newWithdrowAmount, false);
    }
    
    if (currentBalance < newWithdrowAmount){
        console.log("you have insufficient amount");
    }
});