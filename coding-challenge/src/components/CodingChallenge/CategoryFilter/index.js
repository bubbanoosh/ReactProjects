import React, { Component } from 'react'
import _ from 'lodash'

class CategoryFilter extends Component {

    componentWillMount() {
        this.handleSetCategoryList(this.props.currentPageResponse, this.props.setCategoryList);
    }

    handleSetCategoryList(products, setCategoryList) {
        let cats = products.map(c => c.category);
        let all = _.uniq(_.map(cats)).sort()
        setCategoryList(all);
    }

    renderCategories(categories) {

        if (categories.length > 0) {
            return _.map(categories, c => {
                return (
                    <option key={c} value={c}>{c}</option>
                );
            });
        }
    }

    render() {
        return (
            <select name="categories" id={3}>
                {this.renderCategories(this.props.categories)}
            </select>
        )

    }
}

export default CategoryFilter