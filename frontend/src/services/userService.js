import axios from 'axios';

export function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export async function login(email, password) {
  try {
    const { data } = await axios.post('api/users/login', { email, password });
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
}

export async function register(registerData) {
  try {
    const { data } = await axios.post('api/users/register', registerData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem('user');
}

export async function updateProfile(user) {
  try {
    const { data } = await axios.put('/api/users/updateProfile', user);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
}

export async function changePassword(passwords) {
  try {
    await axios.put('/api/users/changePassword', passwords);
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
}

export async function getAll(searchTerm) {
  try {
    const { data } = await axios.get('/api/users/getAll/' + (searchTerm ?? ''));
    return data;
  } catch (error) {
    console.error('Error getting all users:', error);
    throw error;
  }
}

export async function toggleBlock(userId) {
  try {
    const { data } = await axios.put('/api/users/toggleBlock/' + userId);
    return data;
  } catch (error) {
    console.error('Error toggling user block status:', error);
    throw error;
  }
}

export async function getById(userId) {
  try {
    const { data } = await axios.get('/api/users/getById/' + userId);
    return data;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
}

export async function updateUser(userData) {
  try {
    const { data } = await axios.put('/api/users/update', userData);
    return data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}
