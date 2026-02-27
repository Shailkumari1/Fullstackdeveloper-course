/*
1. Capture : Actionable items  & Dynamic components,
2. Define : Functions for each actionable items,
3. Bind (atttach): Event listeners to the actionable items,
*/

// capture 

const Budget = document.getElementById('budget');
const Budgetsubmit = document.getElementById('Budget-submit');

const Title = document.getElementById('title-name');
const ExpensesAmount = document.getElementById('expeses-amount');
const ExpenseSubmit  = document.getElementById('Expenses-sumbit');


const Balance = document.getElementById('balance');
const ExpenseList = document.getElementById('expenses-list');

//functions

function AddBudget(){

    const UserBudget = Number(Budget.value);

    if(!UserBudget || UserBudget <=0){
        alert('Budget is not empty(0) & less then 0 ')
        return
    }

    Balance.innerText = UserBudget;

    alert('Budget Added Successfully')

    Budget.value = '';

}

function AddExpenses(){

    const UserTitle = Title.value;
    const UserExpense = Number(ExpensesAmount.value);
    const UserBalace = Balance.innerText

    if(!UserBalace){

        alert('Add Budget first')

        return
    }
    
    if(!UserTitle || !UserExpense){

        alert('expense name and amount are not empty ')

        return
    }

    if(UserExpense > UserBalace){
        alert('expenses are not greter to total balace')
        return
    }

    const newBalance = UserBalace - UserExpense;
     Balance.innerText = newBalance

     Title.value = ''
     ExpensesAmount.value = ''

     
     const listcontent = `${UserTitle} : ${UserExpense}`
      AddListitem(listcontent)
     alert('expenses added succesfully')

     




}

function AddListitem (content){

   const li = document.createElement('li')
    li.innerText =content;

    ExpenseList.append(li)
    

}

// bind(Attache)

Budgetsubmit.addEventListener('click', AddBudget);
ExpenseSubmit.addEventListener('click', AddExpenses);




