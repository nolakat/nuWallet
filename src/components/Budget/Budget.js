import React from "react";
import {formatPrice} from "../../assets/js/helpers"
import chickenLogo from '../../assets/img/chicken.svg';
import donutLogo from '../../assets/img/donut.svg';
import pizzaLogo from '../../assets/img/pizza.svg';
import burgerLogo from '../../assets/img/burger.svg';



class Budget extends React.Component{
    render(){

        return(
           <>
             <div className ="Budget-Column">
              <div className="Budget-Column--detail">
              <img src={chickenLogo} class="budget-logo"/>
               <h5>Chicken:<span class="Budget-tally"><sup> {formatPrice(this.props.chicken)}</sup> / <sub> $100 </sub></span></h5>
               </div>
               <div className="Budget-Column--detail">
               <img src={donutLogo} class="budget-logo"/>
               <h5>Donuts:<span class="Budget-tally"><sup> {formatPrice(this.props.donuts)}</sup> / <sub> $100 </sub></span></h5>
               </div>
               <div className="Budget-Column--detail">
               <img src={pizzaLogo} class="budget-logo"/>
               <h5>Pizza:<span class="Budget-tally"><sup> {formatPrice(this.props.pizza)}</sup> / <sub> $100 </sub></span></h5>
               </div>
               <div className="Budget-Column--detail">
               <img src={burgerLogo} class="budget-logo"/>
               <h5>Burgers:<span class="Budget-tally"><sup> {formatPrice(this.props.burgers)}</sup> / <sub> $100 </sub></span></h5>
               </div>
               </div>

           </>

        )
    }
}

export default Budget;