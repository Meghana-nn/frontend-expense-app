import { useState } from 'react'
import axios from 'axios'
//import _ from 'loadash'
//import {isEmpty}='loadash'
export default function ExpenseForm(props){
    const [expenseDate , setExpenseDate ] = useState('')
    const [amount , setAmount ] = useState('')
    const [description,setDescription ] = useState('')
    const [categoryId , setCategoryId] = useState('')
    const [formErrors,setFormErrors]=useState({})
    const errors={}
    
    
    const validateErrors=()=>{
        if(expenseDate.trim().length===0){
            errors.expenseDate='date is required'
        }else if(new Date(expenseDate)> new Date()){
                errors.expenseDate='date cannot be greater than present date'
        }
        
        if(amount.trim().length===0){
            errors.amount='amount is required'
        }
        if(description.trim().length===0){
            errors.description='description is required'
        }
        if(categoryId.trim().length===0){
            errors.categoryId='category id is required'
        }
    }
      

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = {
            expenseDate,
            amount,
            description,
            categoryId
        }
        validateErrors()

        if(Object.keys(errors).length===0){
            try{
            const response=axios.post('http://localhost:3504/api/expenses',formData,{
                headers:{
            
            Authorization:localStorage.getItem('token')
                }
            
        })
    }
            catch(err){
                console.log(err.response)
                console.log(err.message.data.errorss)
            }
        // axios.post('http://localhost:3504/api/expenses',formData,{
        //     headers:{
        //         Authorization:localStorage.getItem('token')
        //     }
        // })
        //     .then((response)=>{
        //         const result = response.data
        //         props.addExpense(result)
        //         setExpenseDate('')
        //         setAmount('')
        //         setDescription('')
        //         setCategoryId('')
        //         setFormErrors('')
        //     })
        //     .catch((err)=>{
        //         console.log(err.response)
        //         console.log(err.response.data.errors)
        //     })
         }
        else{
            setFormErrors(errors)
        }
    }
    return(
        <div>
            <br />
            <h2>Add Expenses</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date</label>
                <input 
                    type="date"
                    value={expenseDate}
                    id="expDate"
                    onChange={(e)=>{
                        setExpenseDate(e.target.value)
                    }}
                />
                {formErrors.expenseDate&&<span>{formErrors.expenseDate}</span>}
                <br />
                <label htmlFor='amount'>Amount</label>
                <input
                    type="text"
                    value={amount}
                    id="amount"
                    onChange={(e)=>{
                        setAmount(e.target.value)
                    }}
                />
                {formErrors.amount&&<span>{formErrors.amount}</span>}

                <br />
                <label htmlFor='description'>Description</label>
                <textarea
                    type="text"
                    value={description}
                    id="description"
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    />
                {formErrors.description&&<span>{formErrors.description}</span>}

                <br />
                <label htmlFor='category'>Category</label>
                <select id="category"
                value={categoryId}
                onChange={(e)=>{
                    setCategoryId(e.target.value)
                
                }}>
                    <option value="">Select Category</option>
                    {
                        props.categories.map((ele)=>{
                            return <option
                            key={ele._id}
                            value={ele._id}
                            >{ele.name}
                            </option>
               

                        })
                    }
                


                </select>
                <input
                    type="submit"
                    />
            </form>
        </div>
    )
}