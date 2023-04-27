import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BigText from "../components/BigText";
import Footer from "../components/Footer";
import LogoSlider from "../components/logoSlider";


function Home () {
    return(
        <>
            <Navbar/>
            <Hero
                cName= "hero"
                heroImg= "images/hero_elect.jpg"
                heroImgAlt= "High Voltage Electricity"
                title= "Electrical & High Voltage Installation"
                text= "Electrical Substation System"
            />
            <BigText/>
            <LogoSlider/>        
            <Footer/>
        </>
    )
    
}

export default Home;