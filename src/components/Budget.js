import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {         
        setNewBudget(event.target.value); 
        handleSubmit(event.target.value)     
    }

    const handleSubmit = (value) => {
        if(value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            return;
         }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
                <input 
                    type="number" 
                    step="10" 
                    value={newBudget} 
                    onChange={handleBudgetChange}
                >                
                </input>         
        </div>
    );
};
export default Budget;
