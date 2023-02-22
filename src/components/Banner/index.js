import style from './Banner.module.css';

function Banner({ image }) {
    return (
        <div className={style.cover} 
        style={{ backgroundImage: `url(/images/banner-${image}.png)`}}></div>
    )
}

export default Banner