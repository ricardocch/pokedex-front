import { useRef,useEffect } from 'react';
import style from './ActioonsContainer.module.css';
import { filterAbility,getAblities } from '../../../actions/index';
import { connect } from 'react-redux';
function ActioonsContainer({filterAbility,getAblities,abilities}) {
    
  let ability = useRef('')

  useEffect(() => {
    if(abilities.length === 0) getAblities()

  }, [])
  

  function onFilter(){
    filterAbility(ability.current.value)
  }
  
  return (
    <div className={style.ActioonsContainer}>
      <span>Search by ability</span>
      <input list="abilities" type="text" name="ability" ref={ability}/>
      <datalist id="abilities">
        <option value="All abilities"/>
        { abilities.map( ab => <option key={ab} value={ab}/>) }
      </datalist>
      <button onClick={onFilter}>Search</button>
    </div>
  );
}

function mapStatetoProps(state){
  return {
    abilities:state.abilities
  }
}

export default connect(mapStatetoProps,{filterAbility,getAblities})(ActioonsContainer);