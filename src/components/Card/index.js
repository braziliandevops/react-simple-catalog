import style from './Card.module.css'
import favoriteIcon from './favorite.png'

function Card({ id, title, cover}) {
    return (
        <div className={style.container}>
            <img src={cover} alt={title} className={style.cover} />
            <h2>{title}</h2>
            <img src={favoriteIcon} alt='favorite' className={style.favorite} />
        </div>
    )
}

export default Card