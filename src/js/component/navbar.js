import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/pngwing.com.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img className="mx-5 starWarsLogo" src={starWarsLogo} />
      </Link>
      <div className="mx-5">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorite {store.favorites.length}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div>
              {store.favorites.length !== 0 ? (
                store.favorites.map((favorite, index) => {
                  return (
                    <li
                      key={`$(favorite._id)-${index}`}
                      className="d-flex justify-content-between"
                    >
                      <p>{favorite.properties.name}</p>
                      <button
                        className="btn btn-outline-dark border border-0"
                        onClick={() => actions.addFavorite(favorite)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </li>
                  );
                })
              ) : (
                <li className="text-center p-0">(Empty)</li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
