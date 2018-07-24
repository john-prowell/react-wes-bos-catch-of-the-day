import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() { // needed to bind the Component to this
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // or use an arrow function below

  myInput = React.createRef(); // reference to input of form

  goToStore = event => {
    // function that is binded to Component in order to access this
    // stop the form from submitting
    event.preventDefault();
    // get the text from that input
    const storeName = this.myInput.value.value;
    // change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
