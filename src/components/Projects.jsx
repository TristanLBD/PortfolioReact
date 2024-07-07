import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import useProjects from "../hooks/useProjects";
import Button from "./Button";
import defaultProjectImage from "/src/assets/no-project-img.jpg";

export default function Projects()  {
  const { projects, loading, error } = useProjects();

  const handleImageError = (e) => { e.target.src = defaultProjectImage; };
  if (loading) { return <p>Chargement en cours.</p>; }
  if (error) { return <p>Une erreur est survenue lors du chargement : {error}</p>; }

  return (
    <section className="project-container grid place-content-center">
      <h1 className="mb-6 text-center underline">Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-tertiary p-4 rounded-3xl shadow-md shadow-white">
            <img
              src={project.image}
              alt={`Project ${index}`}
              className="w-full h-40 object-cover rounded-t-lg"
              onError={handleImageError}
            />
            <h3 className="mt-4 text-xl font-semibold">{`Projet ${project.id}`}</h3>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Ajouté le{" "}
              {format(new Date(project.createdAt), "dd MMMM yyyy", {locale: fr})}
            </p>
            <p className="text-sm text-gray-500">
              Modifié le{" "}
              {format(new Date(project.updatedAt), "dd MMMM yyyy", {locale: fr})}
            </p>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <Button text="Voir d'avantage" color="green" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};