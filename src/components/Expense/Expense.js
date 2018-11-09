import React from "react";
import AnimatedNumber from 'react-animated-number';
import {getEntryMsg, formatPrice } from "../../assets/js/helpers";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class Expense extends React.Component{
    categoryRef = React.createRef();
    amountRef = React.createRef();
    addcategoryRef = React.createRef();

    constructor(props){
        super(props);
        this.submitExpense = this.submitExpense.bind(this);
        this.submitDeposit = this.submitDeposit.bind(this);
        this.addCategoryMethod = this.addCategoryMethod.bind(this);

        this.state = {
            smallValue: 42,
            bigValue: 0,
            updates: 0
        };
    }

    submitExpense(e){
    console.log('submit expense run');
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
    console.log('submit desposit run');
    console.log(e);
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

    addCategoryMethod(e){
        e.preventDefault();
    console.log('addCategoryMethod run');

        let duplicateCheck = Object.keys(this.props.currentCategories).some((key) => {
            console.log(this.props.currentCategories[key].name , this.addcategoryRef.current.value);
            return this.props.currentCategories[key].name == this.addcategoryRef.current.value;
        });

        console.log('dog match ', duplicateCheck);
        if(duplicateCheck){
            alert("Category Already Exists!");
            return;
        }

        const newCategory ={
            name: this.addcategoryRef.current.value,
            total: 0
        }


        console.log('new category', newCategory);
        this.props.addCategoryMethod(newCategory);

    e.currentTarget.reset();
    return;
    }

    render(){

        return(

        <span>
            <div className="input-wrap">
            <form className="category-form" onSubmit={this.addCategoryMethod}>
                <input id="categoryAddForm" ref={this.addcategoryRef} type="text" placeholder="Add Your Category" ></input>
                <button type="submit">+</button>
            </form>
            </div>

            <h5>Account Balance</h5>
            <h1 className="accountBalance"><AnimatedNumber
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
                    {Object.keys(this.props.currentCategories).map((key) =>
                    <option>{this.props.currentCategories[key].name}</option>)}
                                    </select>
                            </label>

                                    <div className="input-wrap">
                                        <input name="price" ref={this.amountRef} type="number" step="0.01" placeholder="Enter Amount Here" required></input>
                                        <button type="submit">Submit</button>
                                    </div>
                        </form>
                    </TabPanel>
                    <TabPanel>

                        <form className="deposit-form" onSubmit={this.submitDeposit}>
                                    <h5>{getEntryMsg()}</h5>;
                                    <div className="input-wrap">
                                        <input name="price" ref={this.amountRef} type="number" step="0.01" placeholder="Enter Amount Here" required></input>
                                        <button type="submit">Submit</button>
                                    </div>
                        </form>
                    </TabPanel>

            </Tabs>
      </span>


        )
    }
}

export default Expense;