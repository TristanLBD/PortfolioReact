import React from "react";
import { Link } from "react-router-dom";


export default function ErrorPage()  {
  return (
    <section className="flex items-center justify-center h-[50vh] text-2xl">
      <div className="text-center">
        <h1>404</h1>
        <p>Page non trouvée</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
};