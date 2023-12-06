import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import * as XLSX from 'xlsx';

import Navbar from '../components/Navbar'

const Dashboard = (props) => {
	const [allOrders, setAllOrders] = useState([])

	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:8000/api/unshipped')
			.then(res => {
				setAllOrders(res.data)
				console.log(res.data)
			})
			.catch(err => console.log(err))
	}, [refresh])

	const handleOrders = (e) => {
		console.log(e.target.value)
		if(e.target.value === "AllCurr") {
			axios.get('http://localhost:8000/api/unshipped')
			.then(res => {
				setAllOrders(res.data)
			})
			.catch(err => console.log(err))
		} else if(e.target.value === "CurrPhase") {
			axios.get('http://localhost:8000/api/unshippedPhase')
			.then(res => {
				setAllOrders(res.data)
			})
			.catch(err => console.log(err))
		} else if(e.target.value === "CurrMariak") {
			axios.get('http://localhost:8000/api/unshippedMariak')
			.then(res => {
				setAllOrders(res.data)
				console.log(res.data)
			})
		} else if(e.target.value === "ShippedOrders") {
			axios.get('http://localhost:8000/api/shipped')
			.then(res => {
				setAllOrders(res.data)
				console.log(res.data)
			})
		}
	}


	return (
		<>
			<Navbar />
			<section className="dashboard">

				<div>
					<h3>Show orders</h3>
					<select onChange={handleOrders}>
						<option value="AllCurr">All Current Orders</option>
						<option value="CurrPhase">Current Phase Orders</option>
						<option value="CurrMariak">Current Mariak Orders</option>
						<option value="ShippedOrders">Shipped Orders</option>
					</select>
				</div>

				<div className="dashboard__container">
					<table className="dashbaord__table">
						<thead>
							<tr className="dashboard__table--head">
								<th className="dashboard__table--th">Order Number</th>
								<th className="dashboard__table--th">Selling Channel</th>
								<th className="dashboard__table--th">Buyer Name</th>
								<th className="dashboard__table--th">Manufacturer</th>
								<th className="dashboard__table--th">Sales Order</th>
								<th className="dashboard__table--th">Date Submitted</th>
								<th className="dashboard__table--th">Ship By Date</th>
								<th className="dashboard__table--th">Deliver By Date</th>
								<th className="dashboard__table--th">Edit</th>
							</tr>
						</thead>
						<tbody>
							{
								allOrders.map((order, i) =>
									<tr key={i} className="dashboard__table--tr">
										<td className="dashboard__table--td">{order.orderNum}</td>
										<td className="dashboard__table--td">{order.sellingChannel}</td>
										<td className="dashboard__table--td">{order.name}</td>
										<td className="dashboard__table--td">{order.manu}</td>
										<td className="dashboard__table--td">{order.salesOrder}</td>
										<td className="dashboard__table--td">{order.dateSubmitted}</td>
										<td className="dashboard__table--td">{order.shipBy}</td>
										<td className="dashboard__table--td">{order.deliverBy}</td>
										<td className="dashboard__table--td"><Link to={`/order/${order._id}`}>edit</Link></td>
									</tr>
								)
							}
						</tbody>
					</table>
				</div>

			</section>
		</>
	)
}

export default Dashboard;