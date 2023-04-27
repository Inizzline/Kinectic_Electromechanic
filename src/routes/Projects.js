import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectData from "../components/ProjectData";

function Projects () {
    return (
        <>
            <Navbar/>
            <Hero
                cName= "hero-mid"
                heroImg= "images/hero_project.jpg"
                heroImgAlt= "Hand shake"
                title= "Projects"
            />
            <ProjectData/>
            <Footer/>
        </>
    );
}

export default Projects;