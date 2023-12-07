import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const ViewOrder = (props) => {
	const { id } = useParams();
	const [showMsg, setShowMsg] = useState(false);
	const upb = ["UPB Amazon", "Etsy", "UPB Walmart", "UPB Ebay"]
	const gma = ["GMA Amazon", "GMA Walmart", "GMA Ebay"]

	const [order, setOrder] = useState({
		name: "",
		orderNum: "",
		manu: "",
		address: "",
		sellingChannel: "",
		shipBy: "",
		deliverBy: "",
		products: [
			{
				name: "",
				width: "",
				length: "",
				mountType: "",
				color: "",
				customization: "",
				qty: 1
			}
		],
		notes: ""
	})

	const toggleMessage = () => {
		if (showMsg) {
			setShowMsg(false)
		} else {
			setShowMsg(true)
		}
	}

	useEffect(() => {
		axios.get(`http://localhost:8000/api/order/${id}`)
			.then(res => {
				setOrder(res.data)
				console.log(res.data)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<Navbar />
			<section className="editOrder">
				<div>
					<h2>Order Details:</h2>
					<p>Buyer Name: <span>{order.name}</span></p>
					<p>Order Number: <span>{order.orderNum}</span></p>
					<p>Manufacuture: <span>{order.manu}</span></p>
					<p>Selling Channel: <span>{order.sellingChannel}</span></p>
					<p>Address: <span>{order.address}</span></p>
					<p>Ship By: <span>{order.shipBy}</span></p>
					<p>Deliver By: <span>{order.deliverBy}</span></p>
					<table>
						<tr>
							<th>Product Name</th>
							<th>Width</th>
							<th>Length</th>
							<th>Color</th>
							<th>Mount Type</th>
							<th>Quantity</th>
							<th>Customization</th>
						</tr>
						{
							order.products.map((item, i) =>
								<tr>
									<td>{item.name}</td>
									<td>{item.width}</td>
									<td>{item.length}</td>
									<td>{item.color}</td>
									<td>{item.mountType}</td>
									<td>{item.qty}</td>
									<td>{item.customization}</td>
								</tr>
							)
						}
					</table>
				</div>

				{
					showMsg ?
						<div style={{ backgroundColor: "blue" }}>
							<p>[IMPORTANT]  Please confirm your “Customized Blind” information is correct,</p>
							<p>TYPE: {order.products[0].name}</p>
							<p>COLOR: {order.products[0].color}</p>
							{
								order.products.map((item, i) =>
									<p>{item.qty} qty. {item.width}" W X {item.length}" L {item.mountType === "Inside" ? "– Cut to" : ""}</p>
								)
							}
							<p>MOUNT:  {
								order.products[0].mountType === "Inside" ?
									<>
										Inside – standard factory deduction will be made to headrail width ordered to accommodate mounting brackets and function of the blind .
									</>
									:
									<>
										W=Width (Horizontal) L=Length (Vertical)
										<br />*YOU WILL RECEIVE EXACT MEASUREMENTS ORDERED*
									</>
							}</p>
							<p>NOTE: In the event we do not receive your response within the 24hrs of this message, we will proceed with production. Once production begins, we cannot make any corrections or changes. Any questions contact us&nbsp;
								{
									upb.includes(order.sellingChannel) ?
										<>702 - 852 - 1616</>
										:
										<>702 - 744 - 8108</>
								} &nbsp;(8am-3pm PST)</p>
						</div>
						:
						""
				}

				<div>
					<button onClick={() => toggleMessage()}>Generate Message</button>
					<Link to={`/order/edit/${id}`}><button>Edit</button></Link>
				</div>
			</section>
		</>
	)
}

export default ViewOrder