import React from "react";
import { formatPrice } from "../helpers";

/***PROPS PASSED IN from APP component****/
// key: the property key for each fish in state
// index: the property key for each fish in state
// details: the fish object
// addToOrder function

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index); // key used in addToOrder method
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {/* Or can put addToOrder in onClick like this: onclick={this.props.addToOrder(this.props.index)}
          instead of using the handleClick function above*/}
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
