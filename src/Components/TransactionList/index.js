import React, { Component } from 'react';
import formatAmount from '../../Util';


class TransactionList extends Component {

    render() {

        const transactions = this.props.transactions;
            
        let rows;

        if (transactions) {
            rows = transactions.map((item) => (
                <tr>
                <td>{item.date}</td>
                <td>{item.label}</td>
                <td>{formatAmount(item.amount)}</td>
                </tr>
            ));
        } else {
            rows = null;
        }
        return (
            <table>
            {rows ? (
                <tr>
                    <th>Date</th>
                    <th>Label</th>
                    <th>Amount</th>
                </tr>
            ) : null }
            {rows}
            </table>
        );

    }

}


export default TransactionList;
