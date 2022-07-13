import style from './Home.module.css';
import { connect } from 'react-redux';
import { getPokemonInfo } from '../../actions';
import { useEffect } from 'react';
import Loading from './Loading/Loading';
import NotFound from './NotFound/NotFound';
import CardContainer from './CardContainer/CardContainer';
import ActioonsContainer from './ActioonsContainer/ActioonsContainer';

function Home({TotalInfo,PokemonInfo,getPokemonInfo}) {
  
  useEffect( ()=>{
   if(PokemonInfo.length === 0) getPokemonInfo()
  
  },[])


  return (
    <div className={style.Home}>
      {TotalInfo.length && <ActioonsContainer/>}
      {TotalInfo.length === 0 && <Loading/> }
      { PokemonInfo.length  && <CardContainer data={PokemonInfo}/> }
      {TotalInfo.length && PokemonInfo.length === 0 && <NotFound/>}
    </div>
  );
}

function mapStatetoProps(state){
  return {
    TotalInfo:state.Pokemons,
    PokemonInfo:state.PokemonsToShow
  }
}
export default connect(mapStatetoProps,{getPokemonInfo})(Home);