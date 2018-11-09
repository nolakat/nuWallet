import React from "react";
import Yeti from "./Yeti.svg";

function FourOhFour(){
    return(
    <div className="LostYeti">
        <h1>Whoops!</h1>
        <img src={Yeti} alt="404 Error" />
        <h2>Looks like Someone is Lost!</h2>
    </div>
    )
};

export default FourOhFour;
