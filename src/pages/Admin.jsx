import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";

export default function Projects({ onLogout })  {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <section>
      <h1 className="mb-3">Admin Page</h1>

      <div className="flex gap-3">
        <Button text="Modifier les projets" />
        <Button text="Déconnexion" color="red" onClick={handleLogoutClick} />
      </div>
    </section>
  );
};