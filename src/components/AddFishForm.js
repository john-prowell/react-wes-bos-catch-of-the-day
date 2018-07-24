import React, { Component } from "react";

class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // Stop the form from submitting
    event.preventDefault();
    // Created Fish Object from form inputs
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value), // put into cents
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    console.log(fish);
    // Call addFish method that lives in the main App component
    // that was passed down through props via Inventory component
    // pass the created fish object to it
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
