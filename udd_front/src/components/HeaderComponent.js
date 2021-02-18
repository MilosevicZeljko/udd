import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';

export default function HeaderComponent() {
	return (
		<div>
			<div className='ui secondary pointing menu'>
				<Link to='/' className='item'>
					<Popup content='УДД' trigger={<Icon name='search' size='big' />} />
				</Link>
				<div className='right menu'>
					<Link to='/books/check' className='item'>
						<Popup
							content='Провера Плагијаризма'
							trigger={<Icon name='searchengin' size='big' />}
						/>
					</Link>
					<Link to='/books/search' className='item'>
						<Popup
							content='Претражи Књиге'
							trigger={<Icon name='book' size='big' />}
						/>
					</Link>
					<Link to='/readers/search' className='item'>
						<Popup
							content='Претражи Бета Читаоце'
							trigger={<Icon name='user' size='big' />}
						/>
					</Link>
					<Link to='/books/create' className='item'>
						<Popup
							content='Додај Књигу'
							trigger={<Icon name='plus square' size='big' />}
						/>
					</Link>
					<Link to='/readers/create' className='item'>
						<Popup
							content='Додај Бета Читаоца'
							trigger={<Icon name='add user' size='big' />}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
