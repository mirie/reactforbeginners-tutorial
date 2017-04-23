// Import with ES6 modules.
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
    // Creates a React.Component, and then allows us to extend that 
    // basic component.
    // super();

    // Binds "this" StorePicker component to this prop.
    // this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();

    // First grab the text from the input.
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    
    // Because this BrowserRouter is the parent of everything in our 
    // application, it is possible to surface React Router at any 
    // child component via Contexts.

    // Second route from / to /store/:storeId.
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this) }>
        { /* This is a comment inside of JSX */ }
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" 
          defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store ⇢</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

// Export this as a JS module that can be imported.
export default StorePicker;
