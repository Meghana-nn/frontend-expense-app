import axios from 'axios'
export default function ExpenseItem(props) {
    const getCategoryname = (id) => {
        const category = props.categories.find(ele => ele._id === id)
        if (category) {
            return category.name
        }
        else {
            return 'NA'
        }
    }
        const handleRemove= async ()=>{
            const confirmation = window.confirm("are you sure")
            if(confirmation){

                try{
                    const response= await axios.delete(`http://localhost:3504/api/expenses/${props.expense._id}`,{
                        headers:{
                            Authorization:localStorage.getItem('token')
                        }
                    })
                    const result=response.data
                //console.log(props)
                props.removeExpense(result._id)
                } catch(err){
                    alert(err.message)
                }


                // axios.delete(`http://localhost:3504/api/expenses/${props.expense._id}`,{
                //     headers:{
                //         Authorization:localStorage.getItem('token')
                //     }
                // })
                // .then((response)=>{
                // const result=response.data
                //console.log(props)
                // props.removeExpense(result._id)
                // })
                
                // .catch((err)=>{
                //     alert(err.message)
                // })
            }
        }
    
    return (
        <tr>
            
                <td>{props.expense.expenseDate}</td>
                <td>{props.expense.amount}</td>
                <td>{props.expense.description}</td>
                <td>{getCategoryname(props.expense.categoryId)}</td>
                <td>
                    <button onClick={handleRemove}>remove</button>
                </td>
            </tr>
        
    )
}