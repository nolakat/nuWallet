import React, { Component } from 'react';
import Budget from './components/Budget/Budget';
import Expense from './components/Expense/Expense';
import Ledger from './components/Ledger/Ledger';
import Header from './components/Header/Header';
import Transaction from './components/Transaction/Transaction';
import Footer from './components/Footer/Footer';
import './Main.scss';
import Transition from 'react-transition-group/Transition';
import base from './base';

class App extends Component {

  constructor(){
    super();
    this.submitTransaction = this.submitTransaction.bind(this);
  }

  state={
    transactions: {},
    categories: {},
    total: 0
  };

  componentDidMount(){
    console.log('mounted');
    const localStorageRef = localStorage.getItem(this.props.match.params.walletId);
    if(localStorageRef){
      this.setState({ total: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${this.props.match.params.walletId}`,{
      context: this,
      state: 'transactions'
    });
  }

  componentWillUnMount(){
    console.log('unmounting');
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.walletId, JSON.stringify(this.state.total));
    this.scrollToBottom();
  }


  // keep most recent transaction item in view
  scrollToBottom(){
    const scrollHeight = this.budgetList.scrollHeight;
    const height = this.budgetList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.budgetList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }


   submitTransaction(transaction){
    console.log('submit transaction run');
    //grab keys
    const isDeposit = transaction['deposit'];
    const newAmount = transaction['amount'];
    const newCategory = transaction['category'];
    console.log('isDesposit', isDeposit);
    //do the math
    isDeposit ? this.addValue(newAmount, newCategory): this.subtractValue(newAmount, newCategory);

    // Log transaction
    const transactions = {...this.state.transactions};
    transactions[`transaction${Date.now()}`] = transaction;
    this.setState({ transactions: transactions});

    return;
  };


     addValue = (amount, category)=> {
      //deposits do not affect budget limits
      console.log('amount', amount);

      return this.setState({ total: this.state.total -= amount});
    }

    subtractValue = (amount, category)=> {
    //sort budget category
     {Object.keys(this.state.categories).map((key) => {
      if(this.state.categories[key].name ==  category){
         return this.state.categories[key].total += amount;
      }
    })
    };

     return this.setState({ total: this.state.total -= amount});
    }

    addCategory = (newCategory) => {
     console.log('adding category', newCategory);
     const categories = {...this.state.categories};
      categories[`categories--${Date.now()}`] = newCategory;
      this.setState({categories: categories});

    }



  render() {

    return (
      <>
        <Header person={this.props.match.params.walletId}/>
        <div className="nuWallet--body">
          <div className="Budget--container col-1">
              <Budget currentCategories={this.state.categories} />
          </div>
          <div className="Expense--container col-2">
              <Expense addCategoryMethod ={this.addCategory} total={this.state.total} currentCategories={this.state.categories} submitTransaction={this.submitTransaction} />
          </div>
          <div className="Ledger--container col-1" ref={(div) => {this.budgetList = div;}}>
            {Object.keys(this.state.transactions).map(key => <Transaction key={key} content={this.state.transactions[key]} />)}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
