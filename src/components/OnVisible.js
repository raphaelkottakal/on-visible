import React from 'react';
import { TweenLite } from 'gsap';

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
		
			const windowTopOffset = window.pageYOffset;
			const windowOffset = window.pageYOffset + window.innerHeight;
			const topOffset = this.refs.topElem.offsetTop;
			const height = this.refs.topElem.offsetHeight;
			const endOffset = topOffset + height;
			// console.log('window offset', windowOffset);
			// console.log('window height', window.innerHeight);
			// console.log('end offset', this.endOffset);
			// console.log('top', this.top);
			// console.log('height', this.height);
			if (windowOffset >= endOffset && windowTopOffset <= topOffset) {
				if (!this.state.revealed) {
					this.setState({ revealed: true });
					// console.log('offset reached');
					TweenLite.from(this.refs.topElem, 1, this.props.animation);
				}
				// this.refs.topElem.className += ' animated ' + this.props.animation
			} else if(windowTopOffset >= endOffset || windowOffset <= topOffset) {
				this.setState({ revealed: false });
				// console.log('out of screen');
			}
			// console.log('Scrolled');
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