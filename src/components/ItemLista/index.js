import React from "react";
import '../ItemLista/style.css'

const ItemLista = (props) => {
return (
    <div id="Container">
        <h2>
            {props.signo}
        </h2>

        <p>
            Nascidos entre: {props.dataInicio} - {props.dataFim}
        </p>
    </div>
);}

export default ItemLista;
