import React from "react";
import brandLogo from '../../assets/img/nuWallet_logo.svg';

function Header(props){
    return(
        <div className="Header">
        <div id="brand-logo"><img src={brandLogo} class="brand-logo--img"/><h5 class="brand-logo--name">NuWallet</h5></div>
        <div>
            <a href="/">[logout]</a>
            <h5 className="greeting">Welcome, <span class="greeting--name">{props.person}</span></h5>
        </div>
       </div>
    );
}

export default Header;