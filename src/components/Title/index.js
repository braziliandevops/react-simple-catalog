import style from './Title.module.css'

function Title({ children }) {
    return (
        <div className={style.text}>
            {children}
        </div>
    )
}

export default Title
