import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, Divider, Header } from 'semantic-ui-react';
import { clearBooks, searchPlagiarism } from '../../actions/bookActions';
import { OneBook } from './OneBook';

const CheckPlagiarism = (props) => {
	const [ file, setFile ] = useState(null);
	useEffect(() => {
		return () => {
			props.clearBooks();
		};
	}, []);
	const handleUpload = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSend = () => {
		const formData = new FormData();

		formData.append('file', file);

		props.searchPlagiarism(formData);
	};

	return (
		<div className='ui container'>
			<form className='ui form'>
				<Divider horizontal>
					<Header as='h2'>Плагијаризми</Header>
				</Divider>
				<div className='field'>
					<input
						type='file'
						id='avatar'
						name='avatar'
						accept='application/msword, text/plain, application/pdf'
						onChange={handleUpload}
					/>
				</div>
				<div className='field'>
					<div className='ui green fluid button' onClick={handleSend}>
						Претражи
					</div>
				</div>
				<Divider horizontal>
					<Header as='h2'>Кандидати</Header>
				</Divider>
				<Card.Group itemsPerRow={2}>
					{props.books.length > 0 ? (
						props.books.map((i) => {
							return (
								<OneBook
									key={i.textContent + i.id + i.authorFirstName}
									isbn={i.isbn}
									authorFirstName={i.authorFirstName}
									authorLastName={i.authorLastName}
									title={i.title}
									genre={i.genre}
									textContent={i.textContent}
									url={i.url}
								/>
							);
						})
					) : (
						<Divider horizontal>
							<Header as='h5'>Нема Кандидата</Header>
						</Divider>
					)}
				</Card.Group>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	books: state.books.books,
});

const mapDispatchToProps = { clearBooks, searchPlagiarism };

export default connect(mapStateToProps, mapDispatchToProps)(CheckPlagiarism);
