import React, {Component} from 'react';
import './TransactionForm.scss';

class TransactionForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "",
            label: "",
            category: "",
            amount: ""
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkInput = this.checkInput.bind(this); 
    }

    render() {
        
        return (
            <div className="transaction-form">
                <form onSubmit={this.submitForm}>
                    <input name="date" 
                        onChange={this.handleInputChange}
                        class="input" type="datetime-local" 
                        placeholder="Date"
                        value={this.state.date}
                    /> 
                    <input name="label"
                        onChange={this.handleInputChange}
                        class="input" type="text" 
                        placeholder="Label"
                        value={this.state.label}
                    />
                    <select name="category"
                        class="select"
                        onChange={this.handleInputChange}
                        value={this.state.category}
                    >
                        <option value="utilities">Utilities</option>
                        <option value="income">Income</option>
                    </select>
                    <input name="amount" 
                        onChange={this.handleInputChange}
                        class="input" type="number" step=".01"
                        placeholder="Amount"
                        value={this.state.amount}
                    />
                    <input class="button is-primary" type="submit" value="Submit"/>
                </form>
            </div>
        );

    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        });


    }

    submitForm(event) {
        //TODO input sanitisation and checks etc
        event.preventDefault()

        //Input check
        if (this.checkInput()) {

            this.props.formSubmit(this.state)
            this.setState({
                date:'',
                label:'',
                amount:''
            });
        }
    };

    checkInput() {
        //TODO data sanitisation correctness etc
        const date = this.state.date
        const label = this.state.label
        const amount = parseFloat(this.state.amount)

        if (date && label && amount) {
            return true
        } else {
            return false
        }
    }

};

export default TransactionForm;
