import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";

import { transactionsActions } from '../actions/transactions';
import { transactionsList, isTransactionsFetching } from '../data/selectors/transactions';

import TransactionsTable from './TransactionsTable';
import CsvUploader from './CsvUploader';

class TransactionsView extends Component {

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    const {
      transactions,
      isFetching,
      addTransactions,
      removeTransaction
    } = this.props;

    return (
      <Container>
        <Row>
          <Col className='py-3 mb-2'>
            <TransactionsTable
              transactions={transactions}
              removeTransaction={removeTransaction} />   
          </Col>
        </Row>
        <Row>
          <Col>
            <CsvUploader isFetching={isFetching} onUpload={addTransactions} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapState = state => {
  return {
    transactions: transactionsList(state),
    isFetching: isTransactionsFetching(state),
  };
};

const mapDispatch = dispatch => {
  return {
    getTransactions: () => dispatch(transactionsActions.getTransactions()),
    removeTransaction: (id) => dispatch(transactionsActions.removeTransaction(id)),
    addTransactions: (file) => dispatch(transactionsActions.addTransactions(file)),
  };
};

export default connect(mapState, mapDispatch)(TransactionsView);