let totalSalary=0
let totalExpense=0

const expenseDetails=document.getElementById('expense-details')

// function to add expense

function addExpense(){
    const expenseName= document.getElementById('expense-name').value
    const expenseAmount= parseFloat(document.getElementById('expense-amount').value)
    const salaryInput= parseFloat(document.getElementById('salary').value)

    // validate salry
    if(isNaN(salaryInput) || salaryInput<=0){
        alert("Enter a valid salary before filling expense!!!")
        resetDetails()
        
    }

    if(totalSalary==0){
        totalSalary=salaryInput;
    }
   

    if(!expenseName || isNaN(expenseAmount) || expenseAmount<=0){
        alert("Please enter a valid expense details!!!")
        resetDetails()
    }

    // calculate total expense
    totalExpense+=expenseAmount;

    // create a div for show details

    const expenseItem= document.createElement('div')
    expenseItem.className='expense-list'
    expenseItem.innerHTML=`
    <span>${expenseName}</span>
    <span>$${expenseAmount.toFixed(2)}</span>
    `;
    expenseDetails.appendChild(expenseItem)

    // after click add expense salary field should filled and remaining two willblank

    document.getElementById('expense-name').value=''
    document.getElementById('expense-amount').value=''
 
    // 
    updateDetails()

}

// function to update details on expense details 

function updateDetails(){

    const balance=totalSalary-totalExpense;

    document.getElementById('total-salary').textContent= totalSalary.toFixed(2)
    document.getElementById('total-expense').textContent= totalExpense.toFixed(2)
    document.getElementById('remaining-balance').textContent= balance.toFixed(2)

}

function resetDetails(){
   
    document.getElementsByClassName('expense-list').style.display="none" 

}