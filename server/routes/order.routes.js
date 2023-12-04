const orderController = require('../controllers/order.controller')

module.exports = function(app) {
  app.get('/api/all', orderController.findAll)
  app.get('/api/:id', orderController.oneOrder)
  app.post('/api/order/create', orderController.createOrder)
  app.delete('/api/order/delete/:id', orderController.deleteOrder)
  app.put('/api/order/update/:id', orderController.updateOrder)
}