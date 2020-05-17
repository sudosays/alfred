import React, {Component} from 'react';
import './TransactionForm.scss';

class TransactionInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "",
            label: "",
            amount: ""
        };

        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkInput = this.checkInput.bind(this); 
    }

    render() {
        
        return (
            <div>
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
                    <input name="amount" 
                        onChange={this.handleInputChange}
                        class="input" type="number" 
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
        
            this.props.formSubmit(this.state.date, this.state.label, this.state.amount)
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
        const amount = this.state.amount


        if (date && label && amount) {
            return true
        } else {
            return false
        }
    }

};

export default TransactionInput;
