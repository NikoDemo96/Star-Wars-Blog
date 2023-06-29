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
        <div className="card w-75 m-auto p-5" style={{ MaxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${currentCharacter?.uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3>{currentCharacter?.properties?.name}</h3>
                <p className="card-text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>

          <div className="dangerLine h4 pb-2 mb-4 text-danger border-bottom border-white text d-flex gap-5 mt-4"></div>
          <hr className="border border-danger border-2 opacity-50"></hr>
          <div className="text d-flex mt-2 gap-5 text-danger m-3 justify-content-center">
            <p>Name: {currentCharacter?.properties?.name}</p>
            <p>Birth Year: {currentCharacter?.properties?.birth_year}</p>
            <p>Gender: {currentCharacter?.properties?.gender}</p>
            <p>Height: {currentCharacter?.properties?.height}</p>
            <p>Skin Color: {currentCharacter?.properties?.skin_color}</p>
            <p>Eye Color: {currentCharacter?.properties?.eye_color}</p>
          </div>
        </div>
      ) : (
        <>Loading</>
      )}
    </div>
  );
};

export default CharacterDetails;
