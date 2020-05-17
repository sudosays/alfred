import React, { Component, Fragment } from 'react';
import {formatAmount, getColorIndicator} from '../../Util';

class TransactionList extends Component {

    render() {

        const transactions = this.props.transactions;
            
        let rows;

        if (transactions) {
            rows = transactions.reverse().map((item) => (
                <tr key={item.date + item.label}>
                <td>{item.date}</td>
                <td>{item.label}</td>
                <td>{item.category}</td>
                <td className={getColorIndicator(item.amount)}>{formatAmount(item.amount)}</td>
                </tr>
            ));
        } else {
            rows = null;
        }
        return (
            <table class="table is-fullwidth is-striped is-hoverable">
            {rows ? (
                <Fragment>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Label</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </Fragment>
            ) : null }
            </table>
        );

    }

}


export default TransactionList;
