import axios from '../../config/axios';

export const loadProductOne = async (id) => {
  try {
    const response = await axios.get(`/api/product/${id}`);
    return {
      type: 'LOAD_PRODUCT_ONE',
      payload: response.data,
    };
  } catch (error) {
    console.error(error);
  }
  return {
    type: 'LOAD_PRODUCT_ONE',
    payload: {},
  };
};
