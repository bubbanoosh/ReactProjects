import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchProducts,
  filterProduct,
  calculateAverage
} from '../../modules/products'

const CodingChallenge = props => (
  <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h1>Products: {props.productCategory}</h1>
      <p>Average Weight: {props.averageCubicWeight}</p>

    
    </div>
  </div>
</div>
)

const mapStateToProps = state => ({
  averageCubicWeight: state.products.averageCubicWeight,
  currentProducts: state.products.currentProducts,
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