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

  handleDelete = () => {
    const { deleteFish, index } = this.props;
    deleteFish(index);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={image}
        />
        {/* <button onClick={() => this.props.deleteFish(this.props.index)}> */}
        <button onClick={this.handleDelete}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
