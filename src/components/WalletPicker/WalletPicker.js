import React from 'react';


class  WalletPicker extends React.Component{
    userInput = React.createRef();

    constructor(){
        super();
        // bind 'yer functions
        this.openWallet = this.openWallet.bind(this);
    }

    openWallet(e){
        e.preventDefault();
        const person = this.userInput.current.value;
        this.props.history.push(`/wallet/${person}`);

    };

    render(){
        return(
        <>
        { /* Wallet Gateway */}
        <form className="walletPicker" onSubmit={this.openWallet}>

        <h2>What's Your Name?</h2>
        <div class="input-wrap">
        <input type="text" ref={this.userInput} required placeholder="Wallet Name" />
        <button type="submit">Open Wallet</button>
        </div>
        </form>

        </>
        )
    }
}

export default WalletPicker;