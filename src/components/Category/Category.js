import React from "react";
import {formatPrice} from "../../assets/js/helpers";


class Category extends React.Component{

    render(){
        return(
            <>
                <h5>{this.props.title}</h5>
                <h5>{formatPrice(this.props.amount)} </h5>
            </>
        )
    }

}

export default Category;