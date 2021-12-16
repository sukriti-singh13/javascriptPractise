// Get the btn element
const element = document.querySelector("#btnAddExpense");

//Get heading Element
const headingEl = document.querySelector("#headingTotal")

//Get Description Element
const inputDesc = document.querySelector('#inputDesc')


//init value of expense at 0
let totalExpense = 0;

//Array of Expenses
const allExpense = [];

//New array
const newArr=[];


//Get the ref to table
const expenseTableEl = document.querySelector('#expenseTable');


//onButtonClick add inputAmount to totalExpense

function addExpenseTotal() {
    //object 
    const expenseIteam = {};

    //read value from inputAmount
    const inputElement = document.querySelector("#inputAmount");
    const textAmount = inputElement.value;


    //convert into number
    const expense = parseInt(textAmount, 10);

    //Read the desc from inputDesc
    const textDesc = inputDesc.value;

    //Put it in Object
    expenseIteam.desc = textDesc;
    expenseIteam.amount = expense;
    expenseIteam.moment= new Date();

    allExpense.push(expenseIteam);




    //add that value to totalExpense
    totalExpense += totalExpense + expense;


    //Set the heading element to totalExpense
    const someText = ` Total expense : ${totalExpense}`
    headingEl.innerHTML = someText;

    // //show the table 
    // const data1= allExpense[0];
    // const data2 = allExpense[1];

    // const data1Text=`Expense ${data1.amount} ::Desc :${data1.desc}`
    // const data2Text =`Expense ${data1.amount} ::Desc:${data2.desc}`

    // const tableText=`
    // <div>${data1Text}</div>
    // <div>${data2Text}</div>

    // `


    renderList(allExpense);
}


//listen to the click event
element.addEventListener("click", addExpenseTotal);


//ControllerFunctions

//getting the date string
function getDateString(momento){
    return  momento.toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })

}

//Removing Item
function deleteButton(dateValue){
    console.log('button works')
    for(let i=0; i<allExpense.length; i++){
        if(allExpense[i].moment.valueOf()!==dateValue){
            newArr.push(allExpense[i]);
        }
    }
    renderList(newArr);
  


 
     
}



function renderList(ArrayOfList){
        
        expenseTableEl.innerHTML=" ";
        //Her we are getting array of strings
        const allExpenseHtml = ArrayOfList.map(expense => createListIteam(expense))
        //Here we are getting strings
        const joinedAllExpenseHtml = allExpenseHtml.join('')
   
        expenseTableEl.innerHTML = joinedAllExpenseHtml;

}



function createListIteam({ amount, desc,moment}) {
    return `
        <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
        ${desc}
            <small class="text-muted">${getDateString(moment)}</small>
        </div>
        <div>
            <span class="px-5">
                ${amount}
            </span>
            <button type="button" class="btn btn-outline-danger btn-sm" onclick=deleteButton(${moment.valueOf()})>
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    </li>
 
        
        `

}