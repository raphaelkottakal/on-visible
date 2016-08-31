import React from 'react';

export default class OnVisible extends React.Component {
	componentDidMount() {
		console.log('mounted');
	}

	render() {
		return(
			<div>
				{this.props.children}
			</div>			
		);

	}

}