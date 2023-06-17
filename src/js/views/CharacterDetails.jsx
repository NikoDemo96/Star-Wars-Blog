import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CharacterDetails = () => {
  const params = useParams();
  const [currentCharacter, setCurrentCharacter] = useState({});
  console.log(params);
  const { id } = params; // De-estructuramos params
  const getCharacterDetail = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
      if (response.ok) {
        // Funciono?
        const data = await response.json(); //Si funciono, traduzco a javascript.
        console.log(data);
        setCurrentCharacter(data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacterDetail(id);
  }, []);
  return (
    <div>
      {currentCharacter ? (
        <div className="card w-75 m-auto p-5">
          <p>{currentCharacter?.description}</p>
          <p>{currentCharacter?.properties?.name}</p>
        </div>
      ) : (
        Loading
      )}
    </div>
  );
};

export default CharacterDetails;
