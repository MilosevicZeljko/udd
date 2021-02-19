import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Grid, Segment } from 'semantic-ui-react';
import { clearReaders, searchReaders } from '../../actions/readerActions';
import Map from '../Map';
import OneReader from './OneReader';
import './SearchReader.css';
function SearchReader(props) {
	const [ distance, setDistance ] = useState(1);
	const [ latitude, setLatitude ] = useState(45.256897780686515);
	const [ longitude, setLongitude ] = useState(19.827047585484816);

	const handleChange = (e) => {
		setDistance(e.target.value);
	};

	const startSearch = () => {
		props.searchReaders(latitude, longitude, distance);
	};

	useEffect(() => {
		console.log('only once');
		return () => {
			console.log('cleanup');
			props.clearReaders();
		};
	}, []);

	return (
		<Grid columns={2} className='ui container'>
			<Grid.Column>
				<br />
				<Map
					lat={latitude}
					long={longitude}
					setLatitude={setLatitude}
					setLongitude={setLongitude}
				/>
				<form className='ui form'>
					<div className='two fields'>
						<div className='field'>
							<label>Географска ширина: {latitude}</label>
						</div>
						<div className='field'>
							<label>Географска дужина: {longitude}</label>
						</div>
					</div>
					<div className='field'>
						<div
							style={{ width: '100%', display: 'table' }}
							className='redContainer'
						>
							<Segment>
								<label>Distance {distance} km</label>
								<input
									className='slider'
									id='myRange'
									width='100%'
									type='range'
									min={1}
									max={10000}
									value={distance}
									onChange={handleChange}
									style={{
										display: 'table-cell',
										width: '100%',
									}}
								/>
							</Segment>
						</div>
					</div>
					<div className='field'>
						<div className='ui button fluid green' onClick={startSearch}>
							Претражи
						</div>
					</div>
				</form>
			</Grid.Column>
			<Grid.Column>
				<br />
				<Card.Group itemsPerRow={3}>
					{props.readers.map((r) => {
						return (
							<OneReader
								key={r.firstName + r.lastName + r.email}
								firstName={r.firstName}
								lastName={r.lastName}
								email={r.email}
							/>
						);
					})}
				</Card.Group>
			</Grid.Column>
		</Grid>
	);
}

const mapStateToProps = (state) => ({
	readers: state.readers.readers,
});

const mapDispatchToProps = { searchReaders, clearReaders };

export default connect(mapStateToProps, mapDispatchToProps)(SearchReader);
