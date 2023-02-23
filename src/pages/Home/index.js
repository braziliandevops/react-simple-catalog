import Banner from 'components/Banner'
import Card from 'components/Card'
import Title from 'components/Title'
import videos from 'json/db.json'
import style from './Home.module.css'

function Home() {
    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>Title component</h1>
            </Title>
            <section className={style.container}>
                {videos.map(video => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home