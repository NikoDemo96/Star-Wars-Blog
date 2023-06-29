const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      favorites: [],
    },

    actions: {
      // Use getActions to call a function within a fuction
      fetchCharacters: async () => {
        try {
          const store = getStore(); // 0) Me traigo los valores del Store a mi funcion.

          console.log("soy la funcion de buscar personajes");
          // 1) Se hace la primera peticion para traer la lista de personajes:
          const response = await fetch("https://www.swapi.tech/api/people/"); //Hacemos nuestra peticionn a la API.
          if (response.ok) {
            // <- 2) validamos si la peticion fue correcta
            const data = await response.json(); // <- 3) Traducimos a JS
            const characters = data.results; // <- 4) De Data, extraemos como tal la lista de personajes
            // 4.1) Declaramos un arreglo vacio que va a servir como nuestra lista nueva:
            let charactersDetails = [];

            // 5) Por cada personaje en nuestra lista
            for (let character of characters) {
              // 5.1) Vamos a buscar sus detalles con el Url:
              const detailResponse = await fetch(character.url);
              const detailData = await detailResponse.json(); // <- 5.2) Traducir esa busqueda
              console.log(character.name, detailData);
              // 5.3) Anexamos a nuestra lista, los resultados:
              charactersDetails.push(detailData.result);
            }
            console.log(charactersDetails);
            // 6) Asignamos el valor nuevo al store:
            setStore({ ...store, characters: charactersDetails });
          }
        } catch (error) {
          console.log(error);
        }
      },

      fetchPlanets: async () => {
        try {
          const store = getStore();
          console.log("Soy la funcion de buscar planetas");
          const response = await fetch("https://www.swapi.tech/api/planets/");
          if (response.ok) {
            const data = await response.json();
            const planets = data.results;

            let planetDetails = [];
            for (let planet of planets) {
              const detailResponse = await fetch(planet.url);
              const detailData = await detailResponse.json();
              planetDetails.push(detailData.result);
            }
            console.log(planetDetails);
            setStore({ ...store, planets: planetDetails });
          }
        } catch (error) {
          console.log(error);
        }
      },

      addFavorite: (item) => {
        const store = getStore();
        const favorites = store.favorites; // Extraigo mis favoritos del Store
        const exists = favorites.find((favorite) => favorite === item);
        if (exists) {
          const filteredFavorites = favorites.filter(
            (favorite) => item !== favorite
          );
          setStore({ ...store, favorites: filteredFavorites });
          return;
        }
        const newFavorites = [...favorites, item];
        setStore({ ...store, favorites: newFavorites });
        console.log("Estoy en favoritos", newFavorites);
      },
    },
  };
};

export default getState;
