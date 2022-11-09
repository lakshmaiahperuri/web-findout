
import React, { Component } from 'react';
import ProductRow from './productRow';
import Layout  from '../layout';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container main-content">
        <Layout/>
        <ProductRow />
      </div>
    );
  }
}

export default ProductList;