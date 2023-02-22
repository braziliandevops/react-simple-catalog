import { Link } from 'react-router-dom';
import HeaderLink from 'components/HeaderLink'
import styles from "./Header.module.css";
import logo from './logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="App Logo"></img>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./favorites">
                    Favorites
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header