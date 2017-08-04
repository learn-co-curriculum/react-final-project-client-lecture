import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSurfboardFormData } from '../actions/surfboardForm';
import { createSurfboard } from '../actions/surfboards';

class SurfboardForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentSurfboardFormData = Object.assign({}, this.props.surfboardFormData, {
      [name]: value
    })
    this.props.updateSurfboardFormData(currentSurfboardFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSurfboard(this.props.surfboardFormData)
  }

  render() {
    const { name, price, img_url, length } = this.props.surfboardFormData;

    return (
      <div>
        Add A Surfboard To The Inventory
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="price"
              value={price}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image Url:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="length">Length:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="length"
              value={length}
            />
          </div>

          <button type="submit">Add Board</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    surfboardFormData: state.surfboardFormData
  }
}

export default connect(mapStateToProps, { 
  updateSurfboardFormData,
  createSurfboard
})(SurfboardForm);