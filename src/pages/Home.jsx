import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactApi from "../services/contactAPI.js";
import Card from "../components/card.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// store --> estado global (variables globales dentro de un objeto)
	// dispatch --> modificador del estado global (funciones dentro de un switch)

	useEffect(() => {
		contactApi.getAgenda().then(data => dispatch({
			type: "updateContactsData",
			payload: {
				data
			}
		}))
	}, [])



	return (
		<div className="text-center mt-5 ">

			<Link className="btn btn-primary" to={'/create'}>
				create contact
			</Link>

			{
				store.contactsData.contacts?.map(el => <Card key={el.id} cid={el.id} name={el.name} phone={el.phone} />)
			}

		</div>
	);
}; 