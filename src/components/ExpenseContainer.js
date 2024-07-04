import ExpenseTable from './ExpenseTable'
import ExpenseForm from './ExpenseForm'
export default function ExpenseContainer(props){
    const calcTotal=()=>{
    const total=props.expenses.reduce((acc,cv)=>{
        return acc+cv.amount
    },0)
    return total
}
return (
    <div>
        <h1>Expense Table has {props.expenses.length} values</h1>
        <h2>total expenses-{calcTotal()}</h2>
        <ExpenseTable categories={props.categories} expenses={props.expenses} 
        removeExpense={props.removeExpense}/>
        <ExpenseForm categories={props.categories}  
        addExpense={props.addExpense}/>
    </div>
)
}