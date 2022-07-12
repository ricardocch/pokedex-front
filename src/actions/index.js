
export  function getTotalPokemons() {

  return function(dispatch){
    fetch('https://ricardocch-pokemon-pi.herokuapp.com/pokemons')
    .then(response => response.json())
    .then(json => {
      
      dispatch({ type: 'getPokemons',payload:json });
    
    }).catch( (error)=>{
      
    });
  }
  
}


export function resetStatusCreate(){
  return {
    type:'resetStatusCreate'
  }
}