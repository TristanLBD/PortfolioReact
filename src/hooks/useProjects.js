import { useState, useEffect } from "react";
import axios from "axios";
import { getProjectsUrl } from "/src/shared/endpoints";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(getProjectsUrl);
        setProjects(response.data);
      } catch (err) {
        setError(err.message || "Erreur lors de la récupération des projets.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
  };
};

export default useProjects;
