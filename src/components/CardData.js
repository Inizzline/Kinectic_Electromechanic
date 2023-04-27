import "./CardStyles.css"

function CardData (props) {
    return (
        <div className="display-card">
            <div className="display-image">
                <img src={props.image} alt={props.imgageAlt}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default CardData;