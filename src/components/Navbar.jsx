import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";



export default function Navbar({ token }) {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img className="size-14" src="./src/assets/Logo.png" />
        <h1>Leblond Tristan</h1>
      </div>
      <nav className="flex gap-2">
        <Link to="/">
          <Button text="Accueil" color="primary" />
        </Link>

        {token ? 
        (
          <Link to="/admin">
            <Button text="Modifier les projets" color="blue" />
          </Link>
        ) 
          : 
        (
          <Link to="/login">
            <Button text="Connexion" color="primary" />
          </Link>
        )}
      </nav>
    </header>
  );
};