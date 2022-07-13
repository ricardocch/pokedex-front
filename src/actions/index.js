
export  function getPokemonInfo() {

  return function(dispatch){

    let arrPromise = [];

    for(let i = 1; i <= 150;i++){
      arrPromise.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`))
    }

    Promise.all(arrPromise)
    .then(results => Promise.all(results.map(r => r.json())) )
    .then(results =>{

      results = results.map( pokemon =>{
        let abilities = pokemon.abilities.map(a => a.ability.name )
        return {
          id:pokemon.id,
          name:pokemon.name,
          height:pokemon.height,
          species:pokemon.species.url,
          weight:pokemon.weight,
          hp:pokemon.stats[0].base_stat,
          attack:pokemon.stats[1].base_stat,
          defense:pokemon.stats[2].base_stat,
          speed:pokemon.stats[5].base_stat,
          img:pokemon.sprites.front_shiny,
          abilities
      }
      })
      dispatch({
        type:"getPokemons",
        payload:results
      })

    })
    
  }
  
}

export  function filterAbility(ability) {
  return {
    type:"filterAbility",
    payload:ability
  }
}


export  function getAblities() {
  return function(dispatch){
    fetch('https://pokeapi.co/api/v2/ability')
    .then(response => response.json())
    .then(json => {

      let abilities = json.results.map(ab => ab.name)
      
      dispatch({ type: 'getAblities',payload:abilities });
    
    }).catch( (error)=>{
      
    });
  }
}

export  function getByName(name) {
  return {
    type:"getByName",
    payload:name
  }
}

export  function getByID(id) {
  return {
    type:"getByID",
    payload:id
  }
}

export  function getEvolutions(url) {
  return function(dispatch){
    if(url){
      fetch(url)
      .then(response => response.json())
      .then(json => {
            fetch(json.evolution_chain.url)
          .then(response => response.json())
          .then(json => {
            let evolNames = [];
            evolNames.push(json.chain.species.name)
            evolNames.push(json.chain.evolves_to[0].species.name)

            if(json.chain.evolves_to[0].evolves_to.length)
              evolNames.push(json.chain.evolves_to[0].evolves_to[0].species.name)

            dispatch({ type: 'getEvolutions',payload:evolNames });
          
          }).catch( (error)=>{
            
          });
      
      }).catch( (error)=>{
        
      });
      
    }
  }
}
