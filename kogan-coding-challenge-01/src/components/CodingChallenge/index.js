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

    getRandomKey() {
        return _.random(1, 1000000);
    }

    renderListItem(products) {
        console.log('Entered:');
        // lodash to map Objects > Array

        if (products.some(p => p.category === this.props.productCategory)) {

            let productObjects = products.filter( prod => prod.category === this.props.productCategory);

            return _.map(productObjects, p => {
                return (
                    <Product
                        key={this.getRandomKey()}
                        product={p} />
                );
            });
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Products: {this.props.productCategory}</h1>
                        <p>Average Weight: {this.props.averageCubicWeight}</p>
                        {this.props.currentPageResponse.length > 0 &&
                            <div key={this.getRandomKey()}>
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