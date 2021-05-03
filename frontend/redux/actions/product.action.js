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
};



export const loadProductRelated = async (id) => {
  try {
    const response = await axios.get(`/api/product/${id}/related`);
    return {
      type: 'LOAD_PRODUCT_RELATED',
      payload: response.data,
    };
  } catch (error) {
    console.error(error);
  }
};
