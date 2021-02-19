import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image } from 'semantic-ui-react';

export const OneBook = ({ isbn, authorFirstName, authorLastName, title, genre, textContent, url }) => {
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
				<a href={`http://${url}`}>
					<Icon name='download' />
					Download
				</a>
			</Card.Content>
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
