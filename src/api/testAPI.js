import api from "./index";

export const getTestApi = async (data) => {
  try {
    const response = await api.get(`/test_table`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
