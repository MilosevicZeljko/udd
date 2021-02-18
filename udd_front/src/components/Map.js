import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import ReactMapGl, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';

class Map extends Component {
	state = {
		latitude: 45.254093,
		longitude: 19.842483,
		zoom: 12,
		width: '50',
		height: '70vh',
		clinicLat: this.props.lat,
		clinicLng: this.props.long,
	};

	handleClick = (event) => {
		var lngLat = event.lngLat;
		this.setState({
			clinicLat: lngLat[1],
			clinicLng: lngLat[0],
		});

		this.props.setLatitude(lngLat[1]);
		this.props.setLongitude(lngLat[0]);
	};
	render() {
		return (
			<div className='ui container'>
				<ReactMapGl
					latitude={this.state.latitude}
					longitude={this.state.longitude}
					zoom={this.state.zoom}
					width={this.state.width}
					height={this.state.height}
					mapboxApiAccessToken={
						'pk.eyJ1IjoiemVsamtvbSIsImEiOiJja2xiMWltOTMxMWtvMm5sYjh1eDJ4ZjcwIn0.39M0819j1zZkGvWRQekUjA'
					}
					onClick={(e) => this.handleClick(e)}
					mapStyle='mapbox://styles/zeljkom/ck66geogj0mg61isy58c4b64m'
					onViewportChange={(viewPort) => {
						this.setState(viewPort);
					}}
				>
					{this.state.clinicLat === null ? (
						''
					) : (
						<Marker
							latitude={this.state.clinicLat}
							longitude={this.state.clinicLng}
						>
							<i className='huge user icon' />
						</Marker>
					)}
				</ReactMapGl>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {})(Map);
