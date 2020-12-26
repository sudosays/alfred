import React, {Component, Fragment} from 'react';
import logo from './Assets/logo.svg';
import './App.scss';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import Summary from './Components/Summary';
import {newestDateFirstSort} from './Util';

// For now recurrence is assumed at the start of every month
// Later can specify recurrence period

var settings = {
    monthly_budget: 3000.00,
}



const CATEGORIES = [
    "utilities",
    "food",
    "transport",
    "entertainment",
    "income"
]

const MOCK_TRANSACTIONS = [
    {
        date: Date.now(), 
        label: 'Rent', 
        category: CATEGORIES[0], 
        amount: -100,
        recurring: true
    },
    {
        date: Date.parse('2020-10-05'), 
        label: 'Salary',
        category: CATEGORIES[4],
        amount: 100, 
        recurring: true
    },
];


const SHOW_DEBUG_BUTTONS = false

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            remaining: 0,
            budget: settings.monthly_budget, 
            transactions: MOCK_TRANSACTIONS.sort(newestDateFirstSort),
        };

        this.addTransaction = this.addTransaction.bind(this)
    }

    componentDidMount() {
        this.calculateRemainingFromTransactions()
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
            amount: parseFloat(transaction.amount),
            recurring: transaction.recurring
        });
        
        updatedTransactions.sort(newestDateFirstSort)

        const balance = this.state.remaining
        
        const amount = parseFloat(transaction.amount)
        
        this.setState({
            transactions: updatedTransactions,
            remaining: balance + amount
        });
    
    }

    calculateRemainingFromTransactions() {
        const startOfMonth = new Date(Date.now()).setDate(1)

        console.log(startOfMonth)

        const transactions = this.state.transactions.slice().filter(t => t.date > startOfMonth)
        transactions.sort(newestDateFirstSort)

        var total = transactions.map(t => t.amount).reduce((a, b) => a + b, 0);
                

        const remainingAmount = this.state.budget + total
        this.setState({
            remaining: remainingAmount
        })
    }
}

export default App;
