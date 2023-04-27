import "./ProjectDataStyles.css"

const ProjectData = () => {
    return (
        <div className="project">
            <p>
                KINETIC ELECTROMECHANIC provides a comprehensive service ranging from inspection, design, planning, procurement, installation, commissioning of projects and maintenance of residential and industrial facilities. We focus on providing value-added services to our customers by creating a successful partnership with them throughout the construction and installation process thereby deliver best cost effective services at all times.
            </p>
            <div className="first-div">
                <div className="des-div">
                    <h2>DANGOTE FERTILIZER PLANT</h2>
                    <h4>Electrical/Instrumentation</h4>
                </div>
                <div className="image">
                    <img className="firstImage" src="images/dangote_fert2.jpg" alt="Dangote fertilizer plant"/>
                    <img src="images/dangote_fert1.jpg" alt="Dangote fertilization plant"/>
                </div>
            </div>
            <div className="first-div-reverse">
                <div className="des-div">
                    <h2>RUMUOKORO STATION</h2>
                    <h4>Plumbing</h4>
                </div>
                <div className="image">
                    <img className="firstImage" src="images/rumuokoro1.jpg" alt="Motor park"/>
                    <img src="images/rumuokoro2.jpg" alt="Borehole"/>
                </div>
            </div>
            <div className="first-div">
                <div className="des-div">
                    <h2>RAINBOW, PORT HARCOURT</h2>
                    <h4>Electrical</h4>
                </div>
                <div className="image">
                    <img className="firstImage" src="images/rainbow1.jpg" alt="Storey building"/>
                    <img src="images/rainbow2.jpg" alt="Building"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectData;