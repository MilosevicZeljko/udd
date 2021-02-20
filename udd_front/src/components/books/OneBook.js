import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';
import GeoLocationModal from '../readers/GeoLocationModal';

export const OneBook = ({ isbn, authorFirstName, authorLastName, title, genre, textContent, url, lat, lon }) => {
	const [ modal, setModal ] = useState(false);

	return (
		<Card>
			<Image
				src='https://thumbs-prod.si-cdn.com/ufPRE9RHUDHqQdOsLvYHhJAxy1k=/fit-in/1600x0/https://public-media.si-cdn.com/filer/91/91/91910c23-cae4-46f8-b7c9-e2b22b8c1710/lostbook.jpg'
				wrapped
				ui={false}
			/>
			<Card.Content>
				<Card.Header>{title}</Card.Header>
				<p>ISBN: {isbn}</p>
				<p>Genre: {genre}</p>
				<Card.Meta>
					AUTHOR: {authorFirstName} {authorLastName}
				</Card.Meta>

				<div dangerouslySetInnerHTML={{ __html: textContent }} />
				<Card.Description />
			</Card.Content>
			<Card.Content extra>
				<form className='ui form'>
					<div className='field'>
						<a href={`http://${url}`}>
							<Icon name='download' />
							Download
						</a>
					</div>
					<div className='field'>
						<div onClick={() => setModal(true)}>
							<Icon name='search' />
							Претражи Бета Читаоце
						</div>
					</div>
				</form>
			</Card.Content>
			<GeoLocationModal show={modal} hide={setModal} lat={lat} lon={lon} />
		</Card>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OneBook);
/**isbn
authorFirstName
authorLastName
title
genre
textContent */
