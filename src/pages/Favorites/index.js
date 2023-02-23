import Banner from 'components/Banner'
import Card from 'components/Card'
import Title from 'components/Title'
import style from './Favorites.module.css'

function Favorites() {
    return (
        <>
            <Banner image="favorites" />
            <Title>
                <h1>Favorites</h1>
            </Title>
            <section className={style.container}>
                <Card id="1" key="1" title="New title" cover="https://cdn.marvel.com/content/1x/spidermannwh_hardcover.jpg" />
            </section>
        </>
    )
}

export default Favorites