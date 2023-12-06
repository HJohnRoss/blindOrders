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
		type: String
	},
	address:
	{
		type: String
	},
	products:
	{
		type: [Object],
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
	dateSubmitted:
	{
		type: String
	},
	shipped:
	{
		type: Boolean,
		default: false
	},
	shipBy:
	{
		type: String
	},
	deliverBy:
	{
		type: String
	},
	notes:
	{
		type: String
	}
}, { timestamps: true })

module.exports.Order = mongoose.model('Order', OrderSchema)