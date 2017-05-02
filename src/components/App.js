// Import with ES6 modules.
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    
    // Inital State.
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // Update our state.
    // '...' = spread; Take every item from our object and
    // spread it into this option. Basically makes a copy 
    // of the object
    const fishes = {...this.state.fishes};
  
    // Use timestamp for id.
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // Set new state.
    // This is the same as:
    // this.setState({ fishes: fishes });
    this.setState({ fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // Take a copy of our state.
    const order = {...this.state.order};
    // Update or add the new number of fish ordered.
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

// Export this as a JS module that can be imported.
export default App;
