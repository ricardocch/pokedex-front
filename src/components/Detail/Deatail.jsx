import style from './Detail.module.css';
import {useParams,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import Pokedex from './Pokedex/Pokedex';
import NotFound from '../Home/NotFound/NotFound'
import {getByID,getEvolutions} from '../../actions/index'
import { connect } from 'react-redux';

function Detail({getEvolutions,getByID,Detail,Evolutions}) {
    let {id} = useParams()
    let navigate = useNavigate();
   useEffect(()=> {
    if(id) getByID(id) 
   },[])

   useEffect(()=> {
    if(Detail && Detail.hasOwnProperty("species"))
       getEvolutions(Detail.species) 
   },[Detail])

   function onBack(){
    navigate("/home")
   }

   function onChangePokemon(id) {
    getByID(id)
   }
  return (
    <div className={style.Detail}>
        <div className={style.Back}>
            <img src="/Arrow.png" alt="Back arrow" onClick={onBack}/>
        </div>
       {Detail && Detail.hasOwnProperty("name") ? <Pokedex
       id={Detail.id}
       name={Detail.name}
       img={Detail.img !== '' ? Detail.img : '/Agumon.png'}
       abilities={Detail.abilities.join()}
       height={Detail.height}
       weight={Detail.weight}
       hp={Detail.hp}
       attack={Detail.attack}
       defense={Detail.defense}
       speed={Detail.speed}
       evolutions={Evolutions}
       onChangePokemon={onChangePokemon}
       /> : <NotFound/>}
      {/* <Pokedex/> */}
    </div>
  );
}
function mapStateToProps(state){
    return {
        Detail:state.Detail,
        Evolutions:state.Evolutions
    }
}
export default connect(mapStateToProps,{getByID,getEvolutions})(Detail);