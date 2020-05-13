import React, { Component } from 'react';
import {formatAmount, getColorIndicator} from '../../Util';

class TransactionList extends Component {

    render() {

        const transactions = this.props.transactions;
            
        let rows;

        if (transactions) {
            rows = transactions.map((item) => (
                <tr>
                <td>{item.date}</td>
                <td>{item.label}</td>
                <td className={getColorIndicator(item.amount)}>{formatAmount(item.amount)}</td>
                </tr>
            ));
        } else {
            rows = null;
        }
        return (
            <table class="table is-fullwidth">
            {rows ? (
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Label</th>
                    <th>Amount</th>
                </tr>
                </thead>
            ) : null }
            {rows}
            </table>
        );

    }

}


export default TransactionList;
