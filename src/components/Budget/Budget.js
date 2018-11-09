import React from "react";
import Category from '../Category/Category';



class Budget extends React.Component{
    render(){

        return(
           <div>
             {Object.keys(this.props.currentCategories).map((key, i) => <Category key={i} title={this.props.currentCategories[key].name} amount={this.props.currentCategories[key].total} />  )}
           </div>

        )
    }
}

export default Budget;