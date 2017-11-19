import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    fetchProducts,
    setCurrentProducts,
    setCategoryList,
    filterProduct,
    calculateAverage
} from '../../modules/products'

import ProductList from './ProductList'

class CodingChallenge extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    onCalculateAverageWeightClick() {
        this.props.calculateAverage(this.props.currentProducts);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Products: {this.props.productCategory}</h1>
                        {/* <div>
                            {this.props.currentPageResponse.length > 0 &&
                                <CategoryFilter
                                    currentPageResponse={this.props.currentPageResponse}
                                    selectedCategory={'Air conditioners'}
                                    setCategoryList={setCategoryList}
                                    categories={this.props.categories}
                                />
                            }
                        </div> */}

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6 text-left">
                            <button
                                className="btn btn-success pull-md-left"
                                onClick={this.onCalculateAverageWeightClick.bind(this)}>
                                Calculate avg weight
                            </button>
                        </div>
                        <div className="col-md-6">
                            <div className="pull-xs-left"><h3>Average Weight: {this.props.averageCubicWeight}</h3></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card sb-card col-md-12">
                        <div className="card-body">
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    averageCubicWeight: state.products.averageCubicWeight,
    currentPageResponse: state.products.currentPageResponse,
    productCategory: state.products.productCategory,
    currentProducts: state.products.currentProducts,
    categories: state.products.categories
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts,
    setCurrentProducts,
    setCategoryList,
    filterProduct,
    calculateAverage
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CodingChallenge)