import CategoryItem from "./CategoryItem"

export default function CategoriesList(props){
    return (
        <ul>
            {props.categories.map((ele)=>{
                return <CategoryItem 
                key={ele._id} 
                name={ele.name} 
                id={ele._id} 
                removeCategory={props.removeCategory} />
            
            })}
        </ul>
    )
}