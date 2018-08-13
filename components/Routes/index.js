import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from '../Main';
import What from '../What';

export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path={'/'} component={Main} />
					<Route exact path={'/what-we-do'} component={What} />
				</div>
			</Router>
		);
	}
}