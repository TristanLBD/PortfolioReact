import { useState } from "react";
import { loginApi } from "../api/userApi";

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (formData) => {
    const response = await loginApi(formData);
    if (response.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, login, logout };
};

export default useAuth;
