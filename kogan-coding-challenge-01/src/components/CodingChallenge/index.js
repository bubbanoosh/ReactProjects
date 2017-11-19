import React, { Component } from 'react';
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
    fetchProducts,
    setCurrentProducts,
    filterProduct,
    calculateAverage
} from '../../modules/products'

import ProductList from './ProductList'


class CodingChallenge extends Component {

    constructor(props) {
        super(props);
        this.state = {
            averageCubicWeight: 0
        };
    }

    componentDidMount() {
        console.log('componentDidMount CodingChallenge');
        this.props.fetchProducts();
    }

    onCalculateAverageWeightClick() {
        console.log('onCalculateAverageWeightClick: ' + this.props.currentProducts);
        this.props.calculateAverage();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Products: {this.props.productCategory}</h1>
                        <p>Average Weight: {this.props.averageCubicWeight}
                            <button
                                className="btn btn-danger pull-xs-right" style={{ marginLeft: '10px' }}
                                onClick={this.onCalculateAverageWeightClick.bind(this)}>
                                Calculate avg weight
                            </button></p>
                        {this.props.currentPageResponse.length > 0 &&
                            <ProductList
                                currentPageResponse={this.props.currentPageResponse}
                                productCategory={this.props.productCategory}
                                setCurrentProducts={this.props.setCurrentProducts}
                                currentProducts={this.props.currentProducts} />
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
    productCategory: state.products.productCategory,
    currentProducts: state.products.currentProducts
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts,
    setCurrentProducts,
    filterProduct,
    calculateAverage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodingChallenge)