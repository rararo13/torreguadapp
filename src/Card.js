import React, {useState} from "react";
import "./Card.css";
import logo from "./img/logo.svg"

const Card = (props) => {

    const [colapsado, setColapsado] = useState(false);

    return (
        <div className={colapsado ? 'card-container-collapsed': 'card-container'}>
            <img className="close-button" src={logo} alt='collapse' onClick={() => setColapsado(!colapsado)}></img>
            {!colapsado ? props.componente : 
            <div>
                <img src={props.imagen} alt="img"/>
                <div style={{marginLeft:'4px', marginTop:'-14px'}}>{props.titulo}</div>
            </div>}
        </div>
    );
}

export default Card;