
        // Get the btn element
        const element = document.querySelector("#btnAddExpense");

        //Get heading Element
        const headingEl= document.querySelector("#headingTotal")

        //Get Description Element
        const inputDesc =document.querySelector('#inputDesc')


        //init value of expense at 0
        let totalExpense = 0;

        //Array of Expenses
        const allExpense=[];

        
         //Get the ref to table
         const expenseTableEl =document.querySelector('#expenseTable');


        //onButtonClick add inputAmount to totalExpense

        function addExpenseTotal() {
            //object 
            const expenseIteam={};
           
            //read value from inputAmount
            const inputElement = document.querySelector("#inputAmount");
            const textAmount = inputElement.value;
            

            //convert into number
            const expense = parseInt(textAmount, 10);

            //Read the desc from inputDesc
            const textDesc=inputDesc.value;

            //Put it in Object
            expenseIteam.desc=textDesc;
            expenseIteam.amount=expense;

            allExpense.push(expenseIteam);
         
            
            

            //add that value to totalExpense
            totalExpense += totalExpense+expense;

            
            //Set the heading element to totalExpense
            const someText =` Total expense : ${totalExpense}`
            headingEl.innerHTML= someText;

            // //show the table 
            // const data1= allExpense[0];
            // const data2 = allExpense[1];

            // const data1Text=`Expense ${data1.amount} ::Desc :${data1.desc}`
            // const data2Text =`Expense ${data1.amount} ::Desc:${data2.desc}`
         
            // const tableText=`
            // <div>${data1Text}</div>
            // <div>${data2Text}</div>
            
            // `
            

            //Her we are getting array of strings
            const allExpenseHtml= allExpense.map(expense=>{
                return `<div>${expense.amount}: ${expense.desc}</div>`
            })
            //Here we are getting strings
            const joinedAllExpenseHtml = allExpenseHtml.join('')
            
            
            expenseTableEl.innerHTML= joinedAllExpenseHtml;
        }
        //listen to the click event
        element.addEventListener("click", addExpenseTotal);


