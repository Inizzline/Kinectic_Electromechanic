import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About () {
    return (
        <>
            <Navbar/>
            <Hero
                cName= "hero-mid"
                heroImg= "images/hero_about.jpg"
                heroImgAlt= "Arrow image"
                title= "About Us"
            />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default About;