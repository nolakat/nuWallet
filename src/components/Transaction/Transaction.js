import React from "react";

class Transaction extends React.Component{





    render(){
        let price = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(this.props.content.amount);
        let category = this.props.content.category;
        let isDeposit = this.props.content.deposit;




        return(

            <div className={"Transaction Transaction--" + (isDeposit ? 'Deposit' : 'Expense')}>
            <span class="remove--icon">&#x274c;</span>
            <h5>{category}</h5>
            <h3 class="transactionAmount">{price}</h3>
            </div>

        )
    }
}

export default Transaction;