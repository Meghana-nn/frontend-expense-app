// es6 module loader
import React from 'react'
import  ReactDOM  from 'react-dom/client'
//import Categories from  './Categories'
import App from './App'
//import DynamicSelect from './exercise/Dynamic-Select'
//import Contact from './exercise/Contact'
//import Toggle from './toggle/Toggle'
//import Counter from './counter/Counter'
//import Details from './Details/Details'
//import UserGreeting from './UserGreeting/UserGreeting'
//import Selector from './Selector/Selector'
const root=ReactDOM.createRoot(document.getElementById('root'))
//root.render(<DynamicSelect/>)
  
root.render(<App/>)
//create a component;



    /*const [count,setCount]=useState(0)
    const handleUp=()=>
    {
        setCount(count+1)
    }
    const handleDown=()=>
    {
        setCount(count-1)
    }
    const handleReset=()=>
    {
       setCount(0)
    }
    return(
        <div>
            <h2>counter-{count}</h2>
            <button onClick={handleUp}>+1</button>
            <button onClick={handleDown}>disabled={count===0}-1</button>
            <button onClick={handleReset}>reset</button>

            <p>the count value is{count}</p>
        </div>

/* const category=[{_id:12,name:'food'},
                   {_id:13,name:'travel'}]     
    const handleClick=()=>
    {
        alert(total categories-${category.length})
    }    
    const handleView=(obj)=>
    {
        alert(you selcted${obj.name})
    }  
    
    const users=[{id:1,name:'meg',email:'meg@gmail.com'},
                  {id:2,name:'jack',email:'jack@gmail.com'}]

        const handleAlert=(obj)=>{
            alert('you selected' +obj.id+''+obj.name+''+obj.email)
        }   
        
        const season =['summer','winter','monsoon','rainy']
        const handleSeason=(name)=>{
            const vowels='aeioe'
            let count = 0
            for(let i=0;i<name.length;i++)
            {
                if(vowels.includes(name[i]))
                {
                    count++
                }
            }
            alert('number of vowels'+count )
        }


        const words=['Javascript','React','Node']
    return (
        <div>
            <h1>Expense app</h1>
             <h2>listing category</h2>
             <button onClick={handleClick}>show count</button>
             <ul>
                {
                  category.map((ele)=>{
                  return <li key={ele._id}>{ele.name}<button onClick={()=>{handleView(ele)
                    }}>view </button></li>
                  })
                }
             </ul>   
                <h1>users app</h1>
                <h2>listing users</h2>
                
            <ul>
                {
                users.map((ele)=>{
                return <li key={ele.id}>{ele.name}<button onClick={()=>{handleAlert(ele)}}>view</button></li>
                })
            }
                </ul>

                <h2>listing season</h2>
        <ul>
            {
                season.map((ele,i)=>{
                   return <li key={i}>{ele}<button onClick={()=>{handleSeason(ele)}}>view</button></li>
                     })
            }
        </ul>
            {/*<h1>
              <ul>
                {
                    {word.map((ele,i))=>{
                        return(
                        <div key={i}>
                            <h2>{ele}</h2>
                            <ul>
                                {
                                    tech.split('').map((char,i)=>
                                    {
                                         <li key={i}>{char.toUpperCase()}</li>
                                    })}
                                
                            </ul>

                        </div>

                    )
                    )
                }
            </ul>
            </h1>



         </div>*/
  