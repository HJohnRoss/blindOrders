import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const CreateOrder = (props) => {

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
				customization: "",
				qty: 1
			}
		],
		notes: ""
	})

	const [products, setProducts] = useState([
		<div className="createOrder__form--border">
			<div className="createOrder__form--container">
				<div>
					<label className="createOrder__form--label" htmlFor={`order-name-0`}>Product Name:</label>
					<input onChange={(e) => handleProduct(e, 0)} className="createOrder__form--input" type="text" id={`order-name-0`} />
				</div>
				<div>
					<label className="createOrder__form--label" htmlFor={`order-deliver-0`}>Customizations:</label>
					<textarea onChange={(e) => handleCustomization(e, 0)} className="createOrder__form--input" type="text" id={`order-deliver-0`} />
				</div>
			</div>
			<div>
				<label className="createOrder__form--label" htmlFor={`order-deliver-0`}>Quantity:</label>
				<input onChange={(e) => handleQty(e, 0)} className="createOrder__form--input" type="number" id={`order-deliver-${0}`} defaultValue={1} />
			</div>
		</div>
	]);


	const addProduct = (i) => {
		let tempOrder = [...order.products]
		tempOrder.push(
			{
				name: "",
				customization: ""
			}
		)
		order.products = tempOrder
		setOrder(order);


		let temp = [...products];
		temp.push(
			<div className="createOrder__form--border">
				<div className="createOrder__form--container">
					<div>
						<label className="createOrder__form--label" htmlFor={`order-name-${i}`}>Product Name:</label>
						<input onChange={(e) => handleProduct(e, i)} className="createOrder__form--input" type="text" id={`order-name-${i}`}/>
					</div>
					<div>
						<label className="createOrder__form--label" htmlFor={`order-deliver-${i}`}>Customizations:</label>
						<textarea onChange={(e) => handleCustomization(e, i)} className="createOrder__form--input" type="text" id={`order-deliver-${i}`} />
					</div>
				</div >
				<div>
					<label className="createOrder__form--label" htmlFor={`order-deliver-${i}`}>Quantity:</label>
					<input onChange={(e) => handleQty(e, i)} className="createOrder__form--input" type="number" id={`order-deliver-${i}`} defaultValue={1} />
				</div>
			</div>
		)
		setProducts(temp)
		console.log(order.products)
	}

	const removeProduct = () => {
		let temp = [...products];
		temp.pop()
		let tempOrder = [...order.products]
		tempOrder.pop()
		order.products = tempOrder
		setOrder(order)
		setProducts(temp)
		console.log(order)
	}

	const handleProduct = (e, i) => {
		let temp = [...order.products];
		temp[i].name = e.target.value
		order.products = temp;
		setOrder(order)
	}

	const handleCustomization = (e, i) => {
		let temp = [...order.products];
		temp[i].customization = e.target.value
		order.products = temp;
		setOrder(order);
	}

	const handleQty = (e, i) => {
		let temp = [...order.products];
		temp[i].qty = e.target.value
		order.products = temp;
		setOrder(order);
	}

	const handleName = (e) => {
		order.name = e.target.value
		setOrder(order)
	}

	const handleNum = (e) => {
		order.orderNum = e.target.value
		setOrder(order)
	}

	const handleAddress = (e) => {
		order.address = e.target.value
		setOrder(order)
	}

	const handleChannel = (e) => {
		order.sellingChannel = e.target.value
		setOrder(order)
	}

	const handleManu = (e) => {
		order.manu = e.target.value
		setOrder(order)
	}

	const handleShip = (e) => {
		order.shipBy = e.target.value
		setOrder(order)
	}

	const handleDeliver = (e) => {
		order.deliverBy = e.target.value
		setOrder(order)
	}

	const handleNotes = (e) => {
		order.notes = e.target.value;
		setOrder(order)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(order)
		axios.post('http://localhost:8000/api/order/create', {
			name: order.name,
			orderNum: order.orderNum,
			manu: order.manu,
			address: order.address,
			products: order.products,
			sellingChannel: order.sellingChannel,
			shipBy: order.shipBy,
			deliverBy: order.deliverBy,
			notes: order.notes
		})
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				const errorResponse = err.response.data.errors
				const errArr = []
				for (const key of Object.keys(errorResponse)) {
					errArr.push(errorResponse[key].message)
				}
			})
	}

	return (
		<>
			<Navbar />
			<div className="d-flex">

				<form onSubmit={handleSubmit} className="createOrder__form">
					<h3>Create New Order</h3>
					<div className="createOrder__form--container">
						<div>
							<label className="createOrder__form--label" htmlFor="order-name">Buyer Name:</label>
							<input onChange={(e) => handleName(e)} className="createOrder__form--input" type="text" id="order-name" />
						</div>

						<div>
							<label className="createOrder__form--label" htmlFor="order-num">Order Number:</label>
							<input onChange={(e) => handleNum(e)} className="createOrder__form--input" type="text" id="order-num" />
						</div>
					</div>

					<div className="createOrder__form--container">

						<div>
							<label className="createOrder__form--label" htmlFor="order-address">Shipping Address:</label>
							<textarea onChange={e => handleAddress(e)} className="createOrder__form--input" type="text" id="order-address" />
						</div>

						<div className="createOrder__form--container">
							<div>
								<label className="createOrder__form--label" htmlFor="order-selling-channel">Selling Channel:</label>
								<select onChange={e => handleChannel(e)} name="order-selling-channel" id="order-selling-channel">
									<option value=""></option>
									<option value="UPB Amazon">UPB Amazon</option>
									<option value="GMA Amazon">GMA Amazon</option>
									<option value="Etsy">Etsy</option>
									<option value="UPB Walmart">UPB Walmart</option>
									<option value="GMA Walmart">GMA Walmart</option>
									<option value="UPB Ebay">UPB Ebay</option>
									<option value="GMA Ebay">GMA Ebay</option>
								</select>
							</div>

							<div>

								<label className="createOrder__form--label" htmlFor="order-selling-manu">Manufacture:</label>
								<select onChange={e => handleManu(e)} name="order-selling-manu" id="order-selling-manu">
									<option value=""></option>
									<option value="Phaseii">Phaseii</option>
									<option value="Mariak">Mariak</option>
								</select>
							</div>
						</div>
					</div>

					<div className="createOrder__form--container">
						<div>
							<label className="createOrder__form--label" htmlFor="order-ship">Ship by date:</label>
							<input onChange={e => handleShip(e)} className="createOrder__form--input" type="text" id="order-ship" />
						</div>

						<div>
							<label className="createOrder__form--label" htmlFor="order-deliver">Deliver by date:</label>
							<input onChange={e => handleDeliver(e)} className="createOrder__form--input" type="text" id="order-deliver" />
						</div>
					</div>
					<div className="createOrder__form--products">
						<h4>Products:</h4>
						{
							products.map((product, i) =>
								<div key={i}>
									{product}
								</div>
							)
						}
						<div className="createOrder__form--btns">
							<button type="button" onClick={() => addProduct(products.length)}>Add Product</button>
							{
								products.length > 1 ?
									<button type="button" onClick={() => removeProduct()}>Remove Product</button>
									:
									""
							}
						</div>
					</div>
					<div className="createOrder__form--container">
						<div>
							<label className="createOrder__form--label" htmlFor="order-notes">Notes:</label>
							<textarea onChange={e => handleNotes(e)} className="createOrder__form--input" type="text" id="order-notes" />
						</div>
						</div>
					<button className="createOrder__form--btn">Create Order</button>
				</form>
			</div>
		</>
	)
}

export default CreateOrder