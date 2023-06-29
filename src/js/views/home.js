import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5 container">
      <h2 className="text-start">Characters</h2>
      <div className="carrusel">
        <div className="d-flex gap-5">
          {/* <div>
            Favorites:
            {store.favorites.map((favorite, index) => {
              return (
                <p key={`$(favorite._id)-${index}`}>
                  {favorite.properties.name}
                </p>
              );
            })}
          </div> */}
          {store.characters.map((character) => {
            return (
              <div
                className="card"
                key={character._id}
                style={{ minWidth: "18rem" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title text-start">
                    {character.properties.name}
                  </h4>
                  <p className="card-text text-start">
                    Gender: {character.properties.gender}
                  </p>
                  <p className="card-text text-start">
                    Hair Color: {character.properties.hair_color}
                  </p>
                  <p className="card-text text-start">
                    Eye Color: {character.properties.eye_color}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/character/${character.uid}`)}
                    >
                      Learn More!
                    </button>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => actions.addFavorite(character)}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="mt-5 text-start">Planets</h2>
      <div className="carrusel">
        <div className="d-flex gap-5">
          {store.planets.map((planet) => {
            return (
              <div
                className="card"
                key={planet._id}
                style={{ minWidth: "18rem" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4 className="card-title text-start">
                    {planet.properties.name}
                  </h4>
                  <p className="card-text text-start">
                    Population: {planet.properties.population}
                  </p>
                  <p className="card-text text-start">
                    Terrain: {planet.properties.terrain}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => navigate(`/planet/${planet.uid}`)}
                    >
                      Learn More!
                    </button>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => actions.addFavorite(planet)}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
