import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Header, Icon, Modal, Segment } from 'semantic-ui-react';
import { clearReaders, searchReaders } from '../../actions/readerActions';
import OneReader from './OneReader';
function GeoLocationModal(props) {
	const [ distance, setDistance ] = useState(1);

	const handleChange = (e) => {
		setDistance(e.target.value);
	};

	const hideModal = () => {
		props.hide(false);
		setDistance(1);
		props.clearReaders();
	};

	const findBetaReaders = () => {
		props.searchReaders(props.lat, props.lon, distance);
	};

	useEffect(() => {
		props.clearReaders();

		return () => {
			setDistance(1);
			props.clearReaders();
		};
	}, []);
	return (
		<Modal onClose={hideModal} open={props.show} size='small'>
			<Header icon>
				<Icon name='search' />
				Колико далеко треба да буду читаоци? {props.readers.length}
			</Header>
			<Modal.Content>
				<Segment>
					<Card.Group itemsPerRow={2}>
						{props.readers.length == 0 ? (
							undefined
						) : (
							props.readers.map((r) => {
								return (
									<OneReader
										key={r.firstName + r.lastName + r.email}
										firstName={r.firstName}
										lastName={r.lastName}
										email={r.email}
									/>
								);
							})
						)}
					</Card.Group>
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
				</Segment>
			</Modal.Content>
			<Modal.Actions>
				<Button basic color='red' onClick={hideModal}>
					<Icon name='remove' /> Одустани
				</Button>
				<Button color='green' onClick={findBetaReaders}>
					<Icon name='checkmark' /> Потврди
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

const mapStateToProps = (state) => ({
	readers: state.readers.readers,
});

const mapDispatchToProps = { searchReaders, clearReaders };

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocationModal);
