const Order = require("./order.model");

// Controller to create a new order
const createAOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body); // Properly instantiate the order model
    const savedOrder = await newOrder.save(); // Save the order to the database
    res.status(200).json(savedOrder); // Return the saved order
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" }); // Return error response
  }
};

// Controller to get orders by email
const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params; // Extract email from route parameters
    const orders = await Order.find({ email }).sort({ createdAt: -1 }); // Query and sort by creation date
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this email" }); // Handle not found
    }
    res.status(200).json(orders); // Return the orders
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" }); // Return error response
  }
};

// Export the controllers
module.exports = {
  createAOrder,
  getOrderByEmail,
};
