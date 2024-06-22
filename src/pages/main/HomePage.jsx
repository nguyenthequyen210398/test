
import '../../main.scss'
import Header from '../../layouts/Header';
import Banner from '../../layouts/Banner';
import Nav from '../../components/Nav';
import Footer from '../../layouts/Footer';

function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Nav/>
            <Footer/>
        </>
    )
}

export default HomePage;