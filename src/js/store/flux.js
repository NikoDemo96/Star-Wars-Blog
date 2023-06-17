const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      fetchCharacters: async () => {
        try {
          const store = getStore(); // Me traigo los valores del Store a mi funcion.
          console.log("soy la funcion de buscar personajes");
          const response = await fetch("https://www.swapi.tech/api/people/"); //Primero: hacemos nuestra peticionn a la API.
          if (response.ok) {
            //Segundo: validamos si la peticion fue correcta.
            const data = await response.json(); // Tercero: traducimos a JS
            setStore({ ...store, characters: data.results });
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
            console.log(data);
            setStore({ ...store, planets: data.results });
          }
        } catch (error) {
          console.log(error);
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
