const initialState = {
  Pokemons:[],
  PokemonsToShow:[],
  abilities:[],
  Detail:{},
  Evolutions:[]
};


const pokemons = (state = initialState, action) => {
  
  switch(action.type) {
    
    case "getPokemons":
      return {...state,
        Pokemons:action.payload,
        PokemonsToShow:action.payload
      };

    case "filterAbility":
      let filterPokemons = [...state.Pokemons]
      if(action.payload && action.payload !== "All abilities"){
        filterPokemons = filterPokemons.filter(fp => fp.abilities.indexOf(action.payload) >= 0)
      }

      return {
        ...state,
        PokemonsToShow:filterPokemons
      }

    case "getAblities":
      return{
        ...state,
        abilities:action.payload
      }

    case "getByName":
      let detailByName = [...state.Pokemons]
      detailByName = state.Pokemons.find(p => p.name === action.payload)
      return{
        ...state,
        Detail:detailByName
      }

      case "getByID":
        
        let detailById = [...state.Pokemons]
        detailById = detailById.find(p => p.id === Number(action.payload) )
        return{
          ...state,
          Detail:detailById
        }

      case "getEvolutions":
        let evolutios = [];
        state.Pokemons.forEach(p =>{
          if(action.payload.indexOf(p.name) >= 0){
            evolutios.push({
              id:p.id,
              img:p.img,
              name:p.name
            })
          }
        })
        return {
          ...state,
          Evolutions:evolutios
        }
    default:
      return state
  }
}

export default pokemons;