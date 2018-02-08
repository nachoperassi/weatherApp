import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
	// render only one city's weather in a talbe row
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp - 273.15);
		const press = cityData.list.map(weather => weather.main.pressure);
		const hums = cityData.list.map(weather => weather.main.humidity);
		const { lat, lon } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lng={lon} /></td>
				<td><Chart data={temps} color='red' units='C°' /></td>
				<td><Chart data={press} color='purple' units='hPa' /></td>
				<td><Chart data={hums} color='blue' units='%' /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
			  <thead>
			    <tr>
			      <th>City</th>
			      <th>Temperature</th>
			      <th>Pressure</th>
			      <th>Humidity</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{ this.props.weather.map(this.renderWeather) }
			  </tbody>
			</table>
		);
	}
}

// with a little bit of es6 synthax
function mapStateToProps({ weather }) {
	return { weather }
}

export default connect(mapStateToProps)(WeatherList);