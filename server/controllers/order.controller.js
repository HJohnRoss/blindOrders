const { Order } = require('../models/order.model')

module.exports.findAll = (req, res) => {
  Order.find({})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}

module.exports.oneOrder = (req, res) => {
  Order.findById({ _id: req.params.id })
    .then(order => res.json(order))
    .catch(err => res.json(err))
}

module.exports.createOrder = (req, res) => {
  const { name, orderNum, manu, address, order, sellingChannel, trackingNum, salesOrder, shipped } = req.body
  Order.create({
    name, 
    orderNum,
    manu, 
    address, 
    order, 
    sellingChannel, 
    trackingNum, 
    salesOrder,
    shipped
  })
    .then(order => res.json(order))
    .catch(err => res.status(400).json(err))
}

module.exports.deleteOrder = (req, res) => {
  Order.deleteOne({ _id: req.params.id })
    .then(deleted => res.jsoon(deleted))
    .catch(err => res.json(err))
}

module.exports.updateOrder = (req, res) => {
  Order.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(order => res.jason(order))
    .catch(err => res.json(err))
}