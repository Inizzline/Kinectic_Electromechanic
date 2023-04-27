import { Component } from "react";
import "./BigTextStyles.css"

class BigTextData extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="description-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img className="image1" src={this.props.img1} alt="Dangote fertilization plant"/>
                    <img src={this.props.img2} alt="Port Harcourt Rainbow project"/>
                </div>
            </div>
        )
    }
}


export default BigTextData;