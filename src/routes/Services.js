import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ServiceData from "../components/ServiceData";
import Cards from "../components/Cards"

function Services () {
    return (
        <>
            <Navbar/>
            <Hero
                cName= "hero-mid"
                heroImg= "images/hero_services.jpg"
                heroImgAlt= "Hand shake"
                title= "Services"
            />
            <ServiceData/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Services;