import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";
import contactApi from "../services/contactAPI";

const Card = ({name, phone, cid}) => {

    const navigate = useNavigate();
    const {store, dispatch} = useGlobalReducer()
    const handleNavigate = () => {
        dispatch({
            type: 'selectedContact',
            payload: {
                id: cid
            }
        })
        navigate('/edit')
    }

    return(
        <div className="card">
            <p>{name}</p>
            <p>{phone}</p>
             <button className="btn btn-success" onClick={handleNavigate}>edit</button>
             <button className="btn btn-danger" onClick={()=>contactApi.deleteContact(cid)}>Delete</button>
        </div>
    )
}

export default Card