import React from 'react';
import { Card } from 'semantic-ui-react';

export default function OneReader({ firstName, lastName, email }) {
	return (
		<Card
			image='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
			header={`${firstName} ${lastName}`}
			meta={email}
		/>
	);
}
