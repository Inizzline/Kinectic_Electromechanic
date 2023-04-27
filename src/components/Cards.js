import "./CardStyles.css"
import CardData from "./CardData";

function Card () {
    return (
        <div className="card">
            <h1>OUR SERVICES</h1>
            <p>For your excellent engineering and maintenance services</p>

            <div className="disp-card">
                <CardData
                    image="images/elect_maintain.jpg"
                    imageAlt="Electrical maintenance"
                    heading="Electrical Maintenance"
                    text="Kinetic Prides itself in being the forefront of design and installation of MV, LV, ELV and instrumentation. Our expert design, installation and service team evaluate, plan and execute projects tailored to the client’s needs. At kinetic, we focus on bringing value and reliable electrical equipment manufactured by leading companies."
                />
                 <CardData
                    image="images/mechanical.jpg"
                    imageAlt="Mechanical Installation"
                    heading="Mechanical Installation"
                    text="Kinetic purchase plumbing materials directly from leading manufacturers worldwide which not only mean reduced costs for our customers but ensure we use the latest cutting edge materials. Part of our expertise lies in firefighting equipment and we ensure that your building is adequately protected with both automatic and manual fire fighting solutions.An added Kinetic advantage is that we own all the heavy equipment that we use during in our projects. This saves our customers extra fees or delays that could be caused if the correct equipment is not available.
                   "
                />
                 <CardData
                    image="images/facility.jpg"
                    imageAlt="Repair Services"
                    heading="Facility Management"
                    text="Kinetic Electromechanic offers an overall management of facility, servicing both commercial, residential and industrial facilities. Kinetic works closely with our clients to achieve set goals which provides client satisfaction . We employ well-trained staff and standby technicians in case of emergency to attend to client’s request while emphasising on quality, HSE and customer satisfaction."
                />
            </div>
        </div>
    )
}

export default Card;