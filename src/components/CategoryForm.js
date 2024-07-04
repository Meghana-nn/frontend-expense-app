import axios from 'axios'
import { useState } from 'react'
//import _ from 'loadash'
export default function CategoryForm(props) {
    //econst { addCategory } = props
    const [name, setName] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}



    const validateErrors = () => {
        if (name.trim().length === 0) {
            errors.name = 'name is required'
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            name: name
        }
        validateErrors()

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:3504/categories', formData, {
                    headers: {
                        Authorization: localStorage.getItem('token')

                    }
                })
                const result = response.data
                props.addCategory(result)
                setName('')
                setFormErrors('')
            } catch (err) {
                alert(err.message)
            }
            //     axios.post('http://localhost:3504/api/categories',formData,{
            //         headers:{
            //             Authorization:localStorage.getItem('token')
            //         }
            //     })
            //     .then((response)=>{
            //         const result=response.data
            //         props.addCategory(result)
            //             setName('')
            //             setFormErrors('')
            //         })
            // .catch((err)=>{
            //     alert(err.message)
            // })
        }
        else {
            setFormErrors(errors)
        }
    }
    return (
        <div>
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <label
                    htmlFor='name'
                >enter name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    id="name" />
                {formErrors.name && <span>{formErrors.name}</span>}

                <br />
                <input type="submit" />


            </form>
        </div>
    )
}