import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://65ccd3f8dd519126b83fa909.mockapi.io',
});

export const getAllCars = async () => {
  try {
    const response = await carsInstance.get('/car');

    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};
