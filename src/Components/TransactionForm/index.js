import React, {Component} from 'react';
import './TransactionForm.scss';

class TransactionInput extends Component {

    render() {
        
        return (
            <div>
                <form onSubmit={this.props.formSubmit}>
                    <input class="input" type="datetime-local" placeholder="Date"/> 
                    <input class="input" type="text" placeholder="Label"/>
                    <input class="input" type="number" placeholder="Amount"/>
                    <input class="button is-primary" type="submit" value="Submit"/>
                </form>
            </div>
        );

    }

};

export default TransactionInput;
