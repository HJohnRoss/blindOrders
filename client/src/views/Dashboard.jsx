import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import * as XLSX from 'xlsx';

import Navbar from '../components/Navbar'

const Dashboard = (props) => {
	const [allOrders, setAllOrders] = useState([])

	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:8000/api/all')
			.then(res => {
				setAllOrders(res.data)
				setRefresh(false)
				console.log(res.data)
			})
			.catch(err => console.log(err))
	}, [refresh])


	return (
		<>
			<Navbar />
			<section className="dashboard">


			</section>
		</>
	)
}

export default Dashboard;