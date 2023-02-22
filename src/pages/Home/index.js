import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Title from 'components/Title'

function Home() {
    return (
        <>
            <Header />
            <Banner image="home" />
            <Title>
                <h1>Title component</h1>
            </Title>
            <Footer />
        </>
    )
}

export default Home