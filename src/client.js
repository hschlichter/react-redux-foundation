import React from 'react';
import { render } from 'react-dom';
import routes from './routes.js';
import { IntlProvider, addLocaleData } from 'react-intl';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import create from './redux/create';
import DevTools from './containers/devtools';

require('./styles/main.scss');

function createElement(Component, props) {
	return <Component {...props} />;
}

let store = create({});

addLocaleData(localeData);

render(
	<IntlProvider locale={locale} messages={localeMessages} >
		<Provider store={store}>
			<div>
				<Router history={browserHistory} createElement={createElement} routes={routes} />
				<DevTools />
			</div>
		</Provider>
	</IntlProvider>,
	document.getElementById('content')
);

