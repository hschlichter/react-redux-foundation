import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="column text-center">
						<FormattedMessage id="home.message" />
					</div>
				</div>
			</div>
		);
	}
}

