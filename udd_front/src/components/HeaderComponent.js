import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';

export default function HeaderComponent() {
	return (
		<div>
			<div className='ui secondary pointing menu'>
				<Link to='/' className='item'>
					<Popup content='UDD' trigger={<Icon name='search' size='big' />} />
				</Link>
				<div className='right menu'>
					<Link to='/books/search' className='item'>
						<Popup
							content='Search Books'
							trigger={<Icon name='book alternate' size='big' />}
						/>
					</Link>

					<Link to='/price-list' className='item'>
						<Popup
							content='Search Beta Readers'
							trigger={<Icon name='user alternate' size='big' />}
						/>
					</Link>
					<Link to='/books/create' className='item'>
						<Popup
							content='Add Book'
							trigger={<Icon name='plus square alternate' size='big' />}
						/>
					</Link>
					<Link to='/price-list' className='item'>
						<Popup
							content='Add Beta Reader'
							trigger={<Icon name='add user' size='big' />}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
