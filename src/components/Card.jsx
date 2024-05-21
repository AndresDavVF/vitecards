import "./Card.css";
import { Link } from "react-router-dom";

function Card( {id = "id",name ="name", profile="profile",language ="language",limage="limage",imagen="imagen"}){
    return(
        <div className="card">
            <Link to ={id}>
                <h2>{name}</h2>
            </Link>
            <h3>Perfil: {profile}</h3>
            <h3>Lenguaje: {language}</h3>
            <Link to={language}><img src={limage}/></Link>
        </div>
    );
}

export default Card;