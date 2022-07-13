import style from './Card.module.css';
import {Link} from 'react-router-dom'
function Card({id,name,img}) {

  return (
    <div className={style.Card}>

      <img src={img} alt={name}/>
      <div className={style.Header}>
        <h3>{name}</h3>
      </div>
      <div className={style.type} >
          <label>#{id}</label>
      </div>
      <div className={style.goDetail}>
        <Link to={`/detail/${id}`}>
          <button>See Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Card