const initialState = {
  Pokemons:[]
};


const pokemons = (state = initialState, action) => {
  
  switch(action.type) {
    
    case "getPokemons":
      return {...state,
      };
      
    default:
      return state
  }
}

export default pokemons;