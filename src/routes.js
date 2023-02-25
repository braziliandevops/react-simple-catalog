import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";
import Favorites from "pages/Favorites";
import FavoritesProvider from "contexts/Favorites";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritesProvider>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/favorites" element={<Favorites />}></Route>
                    </Routes>
                </FavoritesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes