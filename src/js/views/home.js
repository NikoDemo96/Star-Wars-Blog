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
      <h2>Characters</h2>
      {store.characters.map((character) => {
        return (
          <div className="card my-2">
            {character.name}
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/character/${character.uid}`)}
            >
              More details
            </button>
          </div>
        );
      })}
      <h2>Planets</h2>
      {store.planets.map((planet) => {
        return (
          <div className="card my-2">
            {planet.name}
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/planet/${planet.uid}`)}
            >
              More details
            </button>
          </div>
        );
      })}
    </div>
  );
};
