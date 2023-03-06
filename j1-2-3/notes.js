const state = {
  name: "",
  email: "alan@alan.fr",
};

// définition d'une clé dynamique
let name = "toto";
const newState = { ...state, [name]: "bernard@bernard.fr" };

console.log(newState);
