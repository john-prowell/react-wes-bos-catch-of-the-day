import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  /************** STATE *************/
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    // React Router give us props
    // this.ref = base.syncState(`${this.props.match.params.storeId}`)
    // destructered params from this.props.match instead of full path above
    const { params } = this.props.match;
    // first reinstate our local storaage;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  /************ METHODS *************/
  // method to take in created fish from addFishForm component
  // which is passed to inventory component then to addFishForm component
  // through props
  addFish = fish => {
    // How to update State
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }; // object spread operator
    // 2. Add our new fish to that fishes variable - the copy
    // fish is the object that is passed in from the addFishForm component
    // we made a copy call fishes
    // then we are adding the date number of milliseconds on to the word fish
    // and adding the new fish object to it
    // example: fishes.fish97839053890 = fish - which adds it to the fishes object
    fishes[`fish${Date.now()}`] = fish; // fishes[`fish${Date.now()}`] is the property and fish is the value
    /* which becomes fish97839053890: {
                       name: 'test',
                       price: 'test',
                       status:  'available'
                       desc: 'Lorem ipsum dolor sit amet.'
                     }
    */

    // 3. Set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({
      fishes
    });
  };

  deleteFish = key => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. update to state
    fishes[key] = null;
    // 3. update state
    this.setState({
      fishes
    });
  };

  loadSampleFishes = () => {
    // ovewrites state with sample fishes object
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. make a copy of state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order: order });
  };

  removeFromOrder = key => {
    // 1. make a copy of state
    const order = { ...this.state.order };
    // 2. remove that item from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order: order });
  };

  /************** RENDER****************/
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {/* Fish component is added per each fish in loop*/}
          <ul className="fishes">
            {/* key is fish property name ex. fish54783574889 */}
            {Object.keys(this.state.fishes).map(key => (
              <Fish // passing props to fish component to each fish in state
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        {/* passing props and specifically the addFish and loadSampleFishes methods to Inventory Component */}
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
