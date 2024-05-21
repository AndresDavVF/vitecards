import React from "react";
import './LenguajesVistas.css';

function LenguajesVistas({len}){
    
    return(
        <div className="lenvista">
            <h1>{len.ntitulo}</h1>
            <h3>{len.ndescripcion}</h3>
            <img src={len.image} alt={len.image+ "image"}/>
        </div>
    )      
    

}

export default LenguajesVistas;