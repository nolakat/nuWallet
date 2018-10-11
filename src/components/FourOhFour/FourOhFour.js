import React from "react";
import Yeti from "./Yeti.svg";

function FourOhFour(){
    return(
    <div class="LostYeti">
        <h1>Whoops!</h1>
        <img src={Yeti} />
        <h2>Looks like Someone is Lost!</h2>
    </div>
    )
};

export default FourOhFour;
