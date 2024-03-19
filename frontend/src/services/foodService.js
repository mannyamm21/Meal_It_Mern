import axios from 'axios';

export async function getAll() {
  try {
    const response = await axios.get('/api/foods');
    return response.data;
  } catch (error) {
    console.error('Error fetching all foods:', error);
    throw error;
  }
}

export async function search(searchTerm) {
  try {
    const response = await axios.get(`/api/foods/search/${searchTerm}`);
    return response.data;
  } catch (error) {
    console.error('Error searching foods:', error);
    throw error;
  }
}

export async function getAllTags() {
  try {
    const response = await axios.get('/api/foods/tags');
    return response.data;
  } catch (error) {
    console.error('Error fetching all tags:', error);
    throw error;
  }
}

export async function getAllByTag(tag) {
  try {
    if (tag === 'All') {
      return getAll();
    }
    const response = await axios.get(`/api/foods/tag/${tag}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching foods by tag:', error);
    throw error;
  }
}

export async function getById(foodId) {
  try {
    const response = await axios.get(`/api/foods/${foodId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching food with ID ${foodId}:`, error);
    throw error;
  }
}

export async function deleteById(foodId) {
  try {
    await axios.delete(`/api/foods/${foodId}`);
  } catch (error) {
    console.error(`Error deleting food with ID ${foodId}:`, error);
    throw error;
  }
}

export async function update(food) {
  try {
    await axios.put('/api/foods', food);
  } catch (error) {
    console.error('Error updating food:', error);
    throw error;
  }
}

export async function add(food) {
  try {
    const response = await axios.post('/api/foods', food);
    return response.data;
  } catch (error) {
    console.error('Error adding food:', error);
    throw error;
  }
}
