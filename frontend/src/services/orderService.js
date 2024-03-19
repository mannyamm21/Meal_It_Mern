import axios from 'axios';

export async function createOrder(order) {
  try {
    const response = await axios.post('/api/orders/create', order);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

export async function getNewOrderForCurrentUser() {
  try {
    const response = await axios.get('/api/orders/newOrderForCurrentUser');
    return response.data;
  } catch (error) {
    console.error('Error getting new order for current user:', error);
    throw error;
  }
}

export async function pay(paymentId) {
  try {
    const response = await axios.put('/api/orders/pay', { paymentId });
    return response.data;
  } catch (error) {
    console.error('Error paying for order:', error);
    throw error;
  }
}

export async function trackOrderById(orderId) {
  try {
    const response = await axios.get('/api/orders/track/' + orderId);
    return response.data;
  } catch (error) {
    console.error('Error tracking order by ID:', error);
    throw error;
  }
}

export async function getAll(state) {
  try {
    const response = await axios.get(`/api/orders/${state ?? ''}`);
    return response.data;
  } catch (error) {
    console.error('Error getting all orders:', error);
    throw error;
  }
}

export async function getAllStatus() {
  try {
    const response = await axios.get('/api/orders/allstatus');
    return response.data;
  } catch (error) {
    console.error('Error getting all order statuses:', error);
    throw error;
  }
}
