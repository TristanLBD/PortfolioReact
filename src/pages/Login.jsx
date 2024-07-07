import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function Login()  {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/admin");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center h-[68vh]">
      <div className="bg-tertiary text-primary p-12 rounded-lg w-[30vw] shadow-lg">
        <h2 className="mb-8 text-center">Connexion</h2>
        <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="font-black underline">Email :</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full" required
          />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="font-black underline" >Mot de passe :</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full" required/>
          </div>
          <div className="flex justify-end gap-3">
            <Button text="Valider" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};