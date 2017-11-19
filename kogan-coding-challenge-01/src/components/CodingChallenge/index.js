import React, { Component } from 'react';
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
    fetchProducts,
    filterProduct,
    calculateAverage
} from '../../modules/products'

import Product from './Product'


class CodingChallenge extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderListItem(products) {
        console.log('Entered:');
        // lodash to map Objects > Array
        return _.map(products, p => {
            return (
                <Product
                    key={p.title}
                    product={p} />
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Products: {this.props.productCategory}</h1>
                        <p>Average Weight: {this.props.averageCubicWeight}</p>
                        {this.props.currentPageResponse.length > 0 &&
                            <div>
                                {this.renderListItem(this.props.currentPageResponse)}
                            </div>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    averageCubicWeight: state.products.averageCubicWeight,
    currentPageResponse: state.products.currentPageResponse,
    productCategory: state.products.productCategory
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts,
    filterProduct,
    calculateAverage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodingChallenge)