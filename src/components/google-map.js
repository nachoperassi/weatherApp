import React, { Component } from 'react';

export default class GoogleMap extends Component {
	// this method is called when the component and all the childs
	// are mounted onto the UI
	// so inside of it we can refer to the DOM elements
	componentDidMount()	{
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lng
			}
		});
	}

	render() {
		// the ref is to later locate the element in the DOM
		return <div ref='map'></div>
	}
}