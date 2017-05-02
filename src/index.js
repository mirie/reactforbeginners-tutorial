// Import with ES6 modules.
import React from 'react';
// Import one of the methods from react-dom.
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// Webpack will compile this and then add the style tag into .html file.
import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';


const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));

// render(<App/>, document.querySelector('#main'));