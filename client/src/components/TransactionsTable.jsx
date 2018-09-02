import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button  } from 'reactstrap';
import { dateFormater } from '../data/services/dateFormater';

const TransactionsTable = ({ 
  transactions,
  removeTransaction
}) => {

  const isEditable = typeof removeTransaction === 'function';

  const tableHead = ['ID', 'Card Holder Hash', 'Date', 'Time', 'Amount'];
  const tableRows = transactions.map((transaction, i) => {
    return (
      <tr key={i}>
        <th scope="row">
          {transaction.id}
        </th>
        <td>{transaction.cardHolderHash}</td>
        <td>{dateFormater(transaction.datetime, 'date')}</td>
        <td>{dateFormater(transaction.datetime, 'time')}</td>
        <td>{transaction.amount}</td>
        {isEditable &&
          <td>
            <Button
              color="danger"
              size="sm"
              onClick={() => removeTransaction(transaction._id)}>
              x
            </Button>
          </td>
        }
      </tr>
    );
  });

  const amountTotal = transactions.reduce((acc, currentValue) => acc + parseInt(currentValue.amount, 10), 0)
    
  const amountAverage = transactions.length
    ? amountTotal / transactions.length
    : amountTotal;

  const footerClolSpan = isEditable ? tableHead.length + 1 : tableHead.length;

  return (
    <Table striped responsive className='border'>
      <thead>
        <tr className="bg-light">
          {tableHead.map((e, key) =>
            <th key={key}>
              {e}
            </th>
          )}
          {isEditable && <th></th>}
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
      <tfoot>
        <tr className="bg-light">
          <td colSpan={footerClolSpan}>
            <b className='mr-2'>Amount of all transactions:</b>
            {amountTotal.toFixed(1)}
          </td>
        </tr>
        <tr className="bg-light">
          <td colSpan={footerClolSpan}>
            <b className='mr-2'>Average amount:</b>
            {amountAverage.toFixed(1)}
          </td>
        </tr>
      </tfoot>
    </Table>
  )
}

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cardHolderHash: PropTypes.string,
      datetime: PropTypes.string,
      amount: PropTypes.string,
    }).isRequired
  ).isRequired,
  removeTransaction: PropTypes.func,
};

export default TransactionsTable;