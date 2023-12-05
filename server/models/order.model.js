const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
	name:
	{
		type: String,
		required: [
			true,
			"Order name is required"
		]
	},
	orderNum:
	{
		type: String,
		required: [
			true,
			"Order Number is required"
		]
	},
	manu:
	{
		type: String,
		required: [
			true,
			"Order name is required"
		]
	},
	address:
	{
		type: String,
		required: [
			true,
			"Address is Required"
		]
	},
	order:
	{
		type: [String],
		default: []
	},
	sellingChannel:
	{
		type: String
	},
	trackingNum:
	{
		type: String
	},
	salesOrder:
	{
		type: String
	},
	shipped:
	{
		type: Boolean,
		default: false
	},
	shippedby:
	{
		type: String
	},
	deliverby:
	{
		type: String
	}
}, { timestamps: true })

module.exports.Order = mongoose.model('Order', OrderSchema)