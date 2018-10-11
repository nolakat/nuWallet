import React from "react";
import AnimatedNumber from 'react-animated-number';
import {getEntryMsg, formatPrice } from "../../assets/js/helpers";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Expense extends React.Component{
    categoryRef = React.createRef();
    amountRef = React.createRef();

    constructor(){
        super();
        this.submitExpense = this.submitExpense.bind(this);
        this.submitDeposit = this.submitDeposit.bind(this);

        this.state = {
            smallValue: 42,
            bigValue: 0,
            updates: 0
        };
    }

    submitExpense(e){
        e.preventDefault();

        // create expense receipt
        const expense ={
            deposit: false,
            category: this.categoryRef.current.value,
            amount: parseFloat(this.amountRef.current.value)
        };

        this.props.submitTransaction(expense);
        e.currentTarget.reset();
    };

    submitDeposit(e){
        e.preventDefault();

        // create deposit receipt
        const deposit ={
            deposit: true,
            category: 'deposit',
            amount: parseFloat(this.amountRef.current.value)
        };
        this.props.submitTransaction(deposit);
        e.currentTarget.reset();
    };

    render(){

        return(
        <>
        <span>
        <h5>Account Balance</h5>
        <h1 class="accountBalance"><AnimatedNumber
                        style={{
                            transition: '.8s ease-out',
                            transitionProperty:
                                'color, font-size'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {opacity: '.5', fontSize: '1.05em'}
                        )}
                        duration={400}
                        stepPrecision={0}
                        value={this.props.total}
                        formatValue={n => ` ${formatPrice(n)} `}/>
        </h1>

            <Tabs>
                <TabList>
                <Tab>Expense</Tab>
                <Tab>Deposit</Tab>
                </TabList>

                    <TabPanel>

                        <form className="expense-form" onSubmit={this.submitExpense}>
                        <label><span>I Spent Money On:</span>
                                    <select name="category" ref={this.categoryRef} required>
                                        <option value="">Category</option>
                                        <option value="chicken">Chicken</option>
                                        <option value="donuts">Donuts</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="hamburgers">Hamburgers</option>
                                    </select>
                            </label>

                                    <div class="input-wrap">
                                        <input name="price" ref={this.amountRef} type="number" step="0.01" placeholder="Enter Amount Here" required></input>
                                        <button type="submit">Submit</button>
                                    </div>
                        </form>
                    </TabPanel>
                    <TabPanel>

                        <form className="deposit-form" onSubmit={this.submitDeposit}>
                                    <h5>{getEntryMsg()}</h5>;
                                    <div class="input-wrap">
                                        <input name="price" ref={this.amountRef} type="number" step="0.01" placeholder="Enter Amount Here" required></input>
                                        <button type="submit">Submit</button>
                                    </div>
                        </form>
                    </TabPanel>

            </Tabs>
      </span>
      </>

        )
    }
}

export default Expense;