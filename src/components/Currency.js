import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const[newCurrency, setNewCurrency] = useState(currency);
    const[currentCurrency, setCurrentCurrency] = useState("");
      
    useEffect(()=>{
        switch(currency){
            case "$":
                setCurrentCurrency("Dollar");
                break;
            case "£":
                setCurrentCurrency("Pound");
                break;
            case "€":
                setCurrentCurrency("Euro");
                break;
            case "₹":
                setCurrentCurrency("Ruppee");
                break;
            default:
                setCurrentCurrency("Pound");
        }

    }, [currency])

    const handleChange = (event) =>{
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
       
    return (
        <div className='alert alert-danger'>
            <select className="custom-select" id="inputGroupSelect01" onChange={handleChange }>
                <option defaultValue value={newCurrency} name="currency"> Currency ({currency} {currentCurrency}) </option>
                <option value="$" name="dollar"> $ Dollar </option>
                <option value="£" name="pound"> £ Pound </option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;