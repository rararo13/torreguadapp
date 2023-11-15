import React, {useState} from "react";
import "./Card.css";


const Card = (props) => {

    const [colapsado, setColapsado] = useState(false);

    return (
        <div className={colapsado ? 'card-container-collapsed': 'card-container'}>
            {!colapsado ? props.componente : 
            <div>
                <img src={props.imagen} alt="img"/>
                <div style={{marginLeft:'4px', marginTop:'-14px'}}>{props.titulo}</div>
            </div>}
        </div>
    );
}

export default Card;