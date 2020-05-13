import React, {Component} from 'react';
import {formatAmount, getColorIndicator} from '../../Util';

class Summary extends Component {

    render(){

        return (
            <div className="summary">
                <CurrentAmount amount={this.props.remaining} />
                <h2>remaining out of</h2>
                <BudgetAmount amount={this.props.budget} />
                {/*TODO add SummaryGraph*/}
            </div>
        );

    }

}

class CurrentAmount extends React.Component {

    render() {

        var colorIndicator = getColorIndicator(this.props.amount); 

        var formattedAmount = formatAmount(this.props.amount);

        return (
            <h1 className={colorIndicator}>{formattedAmount}</h1>
        );
    }

}

const BudgetAmount = props => (
    <h2 className="amount-neutral">{formatAmount(props.amount)}</h2>
);

export default Summary;
