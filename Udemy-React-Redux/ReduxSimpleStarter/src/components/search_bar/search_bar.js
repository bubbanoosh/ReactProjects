import React, { Component } from 'react';

class SeachBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            searchError: ''
        };
    }

    render() {
        return (
            <div className="col-md-12">
                {/* <input onChange={this.handleInputChange} />
                <p>This is the value: {this.state.searchTerm}</p> */}
                <input value={this.state.searchTerm} onChange={(event) => { this.onInputChange(event.target.value) }} />
                {/* {this.props.searchError !== null && this.props.searchError !== '' &&
                    <span style={{ color: 'red' }}>{this.props.searchError}</span>} */}
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({ searchTerm });
        this.props.onVideoSearchChange(searchTerm);
    }

    // handleInputChange(event) {
    //     //console.log(event.target.value);
    //     this.setState({ searchTerm: event.target.value });
    // }
}

export default SeachBar;