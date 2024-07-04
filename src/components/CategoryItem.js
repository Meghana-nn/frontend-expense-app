import axios from 'axios'
export default function CategoryItem(props) {
    const handleRemove = async () => {
        const confirmation = window.confirm("are you sure")
        if (confirmation) {
            try{
                const response=await axios.delete(`http://localhost:3504/api/categories/${props.id}`,{
                    headers:{
                            Authorization:localStorage.getItem('token')
                        }
                    })
                    const result = response.data
                    props.removeCategory(result._id)

            }catch(err){
                alert(err.message)
            }
            // axios.delete(`http://localhost:3504/api/categories/${props.id}`,{
            //     headers:{
            //         Authorization:localStorage.getItem('token')
            //     }
            // })
            //     .then((response) => {
            //         const result = response.data
            //         props.removeCategory(result._id)
            //     })
            //     .catch((err) => {
            //         alert(err.message)
            //     })
        }
    }
    return <li>{props.name}
        <button onClick={handleRemove}>remove</button></li>
}