import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PlanetDescription = () => {
  const [currentPlanet, setCurrentPlanet] = useState({});
  const params = useParams();
  const { id } = params;
  const fetchPlanetDetail = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCurrentPlanet(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPlanetDetail(id);
  }, []);
  console.log(params);
  return (
    <div className="container">
      <p>{currentPlanet?.description}</p>
      <p>{currentPlanet?.properties?.name}</p>
    </div>
  );
};

export default PlanetDescription;
