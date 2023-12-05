import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const Navbar = (props) => {


	const [refresh, setRefresh] = useState(false);


	return (
		<nav id="navbar" className="navbar">
			{
				window.location.href != "http://localhost:5173/" ?
				<Link to={`/`} className="navbar__btn">Dashboard</Link>
				:
				""
			}
			{
				window.location.href != "http://localhost:5173/order/create" ?
				<Link to={`/order/create`} className="navbar__btn">Add Order</Link>
				:
				""
			}
		</nav>
	)
}

export default Navbar