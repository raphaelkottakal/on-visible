import React from 'react';

export default class OnVisible extends React.Component {

	constructor() {
		super();
		this.state = {
			revealed: false
		}
	}

	componentDidMount() {
		console.log('Mounted');
		window.addEventListener('scroll', this.handelScroll.bind(this));
	}

	componentWillUnmount() {
		console.log('Unmounted');
		window.removeEventListener('scroll', this.handelScroll.bind(this));
	}

	handelScroll() {
		if (!this.state.revealed) {
			const windowOffset = window.pageYOffset + window.innerHeight;
			const top = this.refs.topElem.offsetTop;
			const height = this.refs.topElem.offsetHeight;
			const endOffset = top + height;
			// console.log('window offset', windowOffset);
			// console.log('window height', window.innerHeight);
			// console.log('end offset', this.endOffset);
			// console.log('top', this.top);
			// console.log('height', this.height);
			if (windowOffset >= endOffset ) {
				this.setState({ revealed: true });
				console.log('offset reached');
				this.refs.topElem.className += ' animated ' + this.props.animation
			}
			console.log('Scrolled');
		}
	}

	getTopElemStyles() {
		return {
			opacity: (this.state.revealed)? 1 : 0
		}
	}

	render() {
		return(
			<div style={this.getTopElemStyles()} ref="topElem">
				{this.props.children}
			</div>			
		);

	}

}