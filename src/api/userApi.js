import axios from "axios";
import { connexionUrl } from "/src/shared/endpoints";

export const loginApi = async (formData) => {
  const response = await axios.post(connexionUrl, formData);
  return response.data;
};
