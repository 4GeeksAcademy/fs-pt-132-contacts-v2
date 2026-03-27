import { useState } from "react"
import contactApi from "../services/contactAPI"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"

const Edit = () => {
    const {store} = useGlobalReducer()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: store.selected?.name || 'missing info',
        phone: store.selected?.phone || 'missing info',
        email: store.selected?.email || 'missing info',
        address: store.selected?.address || 'missing info',
        id: store.selected?.id
    })

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        const { name, value } = e.target
        //setFormData({...formData, [e.target.name]: e.target.value})
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        contactApi.editContact(formData);
        contactApi.getAgenda()
        navigate('/')
    }

    return (
        <div>
            <h1>Edit contact</h1>
            <form onSubmit={handleSubmit} >
                <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} />
                <input className="form-control" type="text" name='phone' value={formData.phone} onChange={handleChange} />
                <input className="form-control" type="text" name='email' value={formData.email} onChange={handleChange} />
                <input className="form-control" type="text" name='address' value={formData.address} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Edit