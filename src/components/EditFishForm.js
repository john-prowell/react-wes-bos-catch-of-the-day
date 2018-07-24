import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = e => {
    //console.log(e.currentTarget.value);
    // update that fish
    // 1. Take a copy of the current fish
    console.log(...this.props.fish);
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    // another way to make copy and assign updated object properies
    // const updatedFish = Object.assign({}, this.props.fish, {
    //   [e.currentTarget.name]: e.currentTarget.value
    // });
    // calls updateFish passing in the index and updatedFish object
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
