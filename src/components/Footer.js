import "./FooterStyles.css"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>
                        I&I Group
                    </h1>
                    <p>Your excellent engineering and maintenance service</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            <div className="mid">
                <div>
                    <h4>Reach Us</h4>
                    <p>#16B Estate Road, Bons Avenue, Rumuogba, Port Harcourt, Rivers State, Nigeria</p>
                    <h4>Phone</h4>
                    <p>+234 803 545 7405</p>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="/">info@kineticelectromechanic.com</a>
                    <h4>Customer Service</h4>
                    <a href="/">customerservice@kineticelectromechanic.com</a>
                    <h4>Careers</h4>
                    <a href="/">careers@kineticelectromechanic.com</a>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="bottom">
                <p>{date} Copyright Kinetic Electromechanic Nigeria Limited. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;