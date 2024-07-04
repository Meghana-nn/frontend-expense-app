import { useState,useEffect } from 'react'
import CategorieContainer from './components/CategoriesContainer'
import ExpenseContainer from './components/ExpenseContainer'
import axios from 'axios'
import LoginForm from './components/LoginForm'

function App(){
    const [userLoggedIn,setUserLoggedIn]=useState(false)
    const  [categories,setCategories]=useState([])
    const [expenses,setExpenses]=useState([])




   useEffect(()=>{
    if(userLoggedIn){
        (async function(){
            try{
   const categoryResponse=await  axios.get('http://localhost:3504/api/categories',{
        headers:{
            Authorization:localStorage.getItem('token')
        }
})
        setCategories(categoryResponse.data)
const expenseResponse=await axios.get('http://localhost:3504/api/expenses',{
    headers:{
        Authorization:localStorage.getItem('token')
    }

})
    
        setExpenses(expenseResponse.data)
}
catch(err){
    alert(err.message)
}

})();
    }
    else{
setCategories([])
setExpenses([])
    }

},[userLoggedIn])

  useEffect(()=>{
    if(localStorage.getItem('token')){
        setUserLoggedIn(true)
        
    }

  },[])


const addCategory=(category)=>{
    setCategories([...categories,category])
}

const addExpense=(expense)=>{
    setExpenses([...expenses, expense])
}

const removeCategory=(id)=>{
    const newArr=categories.filter((ele)=>{
        return ele._id !==id
    })
    setCategories(newArr)
}        


const removeExpense=(id)=>{
    const newArr=expenses.filter((ele)=>{
        return ele._id!==id
    })
    setExpenses(newArr)
}

const loginSuccess = () => {
    setUserLoggedIn(true) 
}

const logoutUser = () => {
    setUserLoggedIn(false)
}
    
return(
        <div>
            <h1>Expense app</h1>
            { userLoggedIn ?(
                <div>  
                       <button onClick={logoutUser}>Logout</button>
                        <CategorieContainer 
                    categories={categories}
                    addCategory={addCategory}
                    removeCategory={removeCategory}/>


                    <ExpenseContainer 
                    expenses={expenses}
                    categories={categories} 
                    addExpense={addExpense}
                    removeExpense={removeExpense}/>
            </div>
    ):(

        <div>
             <LoginForm loginSuccess={loginSuccess} />
        </div>
    )}
    </div>
    )
}
export default App