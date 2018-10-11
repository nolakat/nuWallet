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
    total: 0,
    chickenSum: 0,
    donutSum: 0,
    pizzaSum: 0,
    hamburgerSum: 0
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

    //grab keys
    const isDeposit = transaction['deposit'];
    const newAmount = transaction['amount'];
    const newCategory = transaction['category'];

    //do the math
    isDeposit ? this.addValue(newAmount, newCategory): this.subtractValue(newAmount, newCategory);

    // Log transaction
    const transactions = {...this.state.transactions};
    transactions[`transaction${Date.now()}`] = transaction;
    this.setState({ transactions: transactions});

    return;
  };

    sortCategory = (val) => {
      switch(val){
        case 'chicken':
          return 'chickenSum';
        case 'pizza':
          return 'pizzaSum';
          case 'donuts':
          return 'donutSum';
          case 'hamburgers':
          return 'hamburgerSum';
          default:
          return null;
      }
    };

     addValue = (num)=> {
      //deposits do not affect budget limits

      return this.setState({ total: this.state.total += num});
    }

    subtractValue = (num, cat)=> {
    //sort budget category
     let category = this.sortCategory(cat);
     this.setState({[category]: this.state[category] += num });

      return this.setState({ total: this.state.total -= num});
    }

  render() {

    return (
      <>
        <Header person={this.props.match.params.walletId}/>
        <div className="nuWallet--body">
          <div className="Budget--container col-1">
              <Budget chicken={this.state.chickenSum} donuts={this.state.donutSum} pizza={this.state.pizzaSum} burgers={this.state.hamburgerSum} />
          </div>
          <div className="Expense--container col-2">
              <Expense total={this.state.total} submitTransaction={this.submitTransaction} />
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
