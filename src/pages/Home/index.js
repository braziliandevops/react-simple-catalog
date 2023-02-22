import Banner from 'components/Banner'
import Card from 'components/Card'
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
            <Card id='1' title='Movie 1' cover='https://m.media-amazon.com/images/I/71x1RHSaEhL.jpg' />
            <Footer />
        </>
    )
}

export default Home