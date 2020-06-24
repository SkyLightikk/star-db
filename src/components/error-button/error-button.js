import React, { Component } from 'react'

export default class ErrorButton extends Component {
  state = {
    renderError: false
  }

  render() {
    if(this.state.renderError) {
    this.foo.bar = 0;
    }

    return (
      <button type="button" 
              className="btn btn-danger mb-md-3 ml-2"
              onClick={() => this.setState({renderError: true})}
              >
                Throw Error
      </button>
    );
  }
}