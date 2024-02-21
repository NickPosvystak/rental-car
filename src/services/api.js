import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://65ccd3f8dd519126b83fa909.mockapi.io',
});

export const getAllCars = async (page = 1, limit = 12) => {
  try {
    const response = await carsInstance.get(`/car?page=${page}&limit=${limit}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};
