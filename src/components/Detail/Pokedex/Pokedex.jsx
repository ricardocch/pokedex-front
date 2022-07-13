import style from './Pokedex.module.css';
import {getByID} from '../../../actions/index'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

function Pokedex({id,
    name,
    abilities,
    height,
    weight,
    hp,
    attack,
    defense,
    evolutions,
    speed,
    onChangePokemon}) {

   
  return (
        <div className={style.Pokedex}>
            <div>
                <img src="/PokedexSup.jpg" alt="BAckgraind"/>
            </div>
            <div className={style.Middle}>
                <div className={style.Display}>
                        {
                            evolutions.map( ev => <Link to={`/detail/${ev.id}`} key={ev.id} >
                                <img  onClick={(e) => onChangePokemon(ev.id)} src={ev.img} alt="Imaagen de Pokemon"  className={ev.name !== name ? style.current : ''} />
                            </Link>)
                            
                        }<h3>{id}</h3>
                        <h3>{name.toUpperCase()}</h3>
                        <div className={style.info}>
                            <h4>Height:{height}</h4>
                            <h4>weight:{weight}</h4>
                            <h4>HP:{hp}</h4>
                            <h4>Speed:{speed}</h4>
                            <h4>Attack:{attack}</h4>
                            <h4>Defense:{defense}</h4>
                        </div>
                        <h4>ablities:{abilities}</h4>
                </div>
            </div>
            <div>
                <img src="/PokedexDown.jpg" alt="BAckgraind"/>
            </div>
        </div>
  );
}

export default connect(null,{getByID})(Pokedex);