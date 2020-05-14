import React, {Component, Fragment} from 'react';
import logo from './Assets/logo.svg';
import './App.scss';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import Summary from './Components/Summary';

const MOCK_TRANSACTIONS = [
    {date: '10-05-2020', label: 'Test', amount: 100},
    {date: '10-05-2020', label: 'Test 2', amount: -100},
];

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            remaining: 0,
            budget: 0,
        };
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Summary remaining={this.state.remaining} budget={this.state.budget}/>
                </header>    
                {this.addTestingButtons()}
                <TransactionForm formSubmit={this.formSubmit}/>
                <TransactionList transactions={MOCK_TRANSACTIONS}/>
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

    formSubmit(event) {
        event.preventDefault();
        console.log("FORM SUBMITTED!")
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
