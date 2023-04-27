import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./logoSliderStyles.css"
import { Component } from "react";

class LogoSlider extends Component {
    render() {
        const settings = {
            infinte: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }
        return(
            <div className="mainContainer">
            <Slider {...settings}>
                <div className="container">
                    <img src="images/ptdf.jpg" alt="ptdf"/>
                </div>
                <div className="container">
                    <img src="images/agip.jpg" alt="agip"/>
                </div>
                <div className="container">
                    <img src="images/nnpc.jpg" alt="nnpc"/>
                </div>
                <div className="container">
                    <img src="images/tinapa.jpg" alt="tinapa"/>
                </div>
                <div className="container">
                    <img src="images/megastar.jpg" alt="megastar"/>
                </div>
                <div className="container">
                    <img src="images/rainbow.jpg" alt="rainbow"/>
                </div>
                <div className="container">
                    <img src="images/boah.jpg" alt="boah"/>
                </div>
                <div className="container">
                    <img src="images/lemeridien.jpg" alt="lemeridien"/>
                </div>
                <div className="container">
                    <img src="images/silver.jpg" alt="silverbird"/>
                </div>
                <div className="container">
                    <img src="images/akassa.jpg" alt="akassa"/>
                </div>
                <div className="container">
                    <img src="images/culture.jpg" alt="culture"/>
                </div>
            </Slider>
            </div>
        )
    }
}

export default LogoSlider;