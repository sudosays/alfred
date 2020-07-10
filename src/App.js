import React, {Component, Fragment} from 'react';
import logo from './Assets/logo.svg';
import './App.scss';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import Summary from './Components/Summary';

const CATEGORIES = [
    "utilities",
    "food",
    "transport",
    "entertainment",
    "income"
]

const MOCK_TRANSACTIONS = [
    {date: '10-05-2020', label: 'Rent', category: CATEGORIES[0], amount: -100},
    {date: '10-05-2020', label: 'Salary', category: CATEGORIES[4], amount: 100},
];


const SHOW_DEBUG_BUTTONS = false

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            remaining: 0,
            budget: 0,
            transactions: MOCK_TRANSACTIONS,
        };

        this.addTransaction = this.addTransaction.bind(this)
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Summary remaining={this.state.remaining} budget={this.state.budget}/>
                </header>    
                {SHOW_DEBUG_BUTTONS ? this.addTestingButtons() : ''}
                <TransactionForm formSubmit={this.addTransaction}/>
                <TransactionList transactions={this.state.transactions}/>
            </div>
        );
    }

    addTestingButtons() {
        return (
            <Fragment>
                <button class="button" onClick={() => this.increaseBudget()}>Increase Budget</button>
                <button class="button" onClick={() => this.decreaseBudget()}>Decrease Budget</button>
                <button class="button" onClick={() => this.addCash()}>Add Cash</button>
                <button class="button" onClick={() => this.removeCash()}>Remove Cash</button>
            </Fragment>
        )
    };

    addTransaction(transaction) {
        var updatedTransactions = this.state.transactions.slice()
        
        updatedTransactions.push({
            date: transaction.date,
            label: transaction.label,
            category: transaction.category,
            amount: transaction.amount
        });
    
        const balance = this.state.remaining
        
        const amount = parseFloat(transaction.amount)
        
        this.setState({
            transactions: updatedTransactions,
            remaining: balance + amount
        });
    
    }

    //--- Helper test functions ---//
    increaseBudget() {
        var budget = this.state.budget;
        budget = budget + 100;
        this.setState({
            budget: budget,
            remaining: this.state.remaining,
        });
    }

    decreaseBudget() {
        var budget = this.state.budget;
        budget = budget - 100;
        this.setState({
            budget: budget,
            remaining: this.state.remaining,
        });
    }

    addCash() {
        var remaining = this.state.remaining;
        remaining = remaining + 100;
        this.setState({
            budget: this.state.budget,
            remaining: remaining,
        });
    }
    
    removeCash() {
        var remaining = this.state.remaining;
        remaining = remaining - 100;
        this.setState({
            budget: this.state.budget,
            remaining: remaining,
        });
    }
}

export default App;
