import CategoriesList from "./CategoriesList"
import CategoryForm from "./CategoryForm"
function CategorieContainer(props) {
  
  return (
    <div>
      
     <h2>Listing Categories-{props.categories.length}</h2>
      <CategoriesList
        categories={props.categories}
        removeCategory={props.removeCategory} />
      <CategoryForm addCategory={props.addCategory} />
    </div>
   
    
  )
  
  
}
export default CategorieContainer