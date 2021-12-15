
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
            headingEl.innerHTML= totalExpense;

        
        }
        //listen to the click event
        element.addEventListener("click", addExpenseTotal);
    