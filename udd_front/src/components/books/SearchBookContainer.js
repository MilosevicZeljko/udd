import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Checkbox, Divider, Grid, Header, Segment } from 'semantic-ui-react';
import { searchBook } from '../../actions/bookActions';
import { OneBook } from './OneBook';
const SearchBookContainer = (props) => {
	const [ title, setTitle ] = useState('');
	const [ authorFirstName, setAuthorFirstName ] = useState('');
	const [ authorLastName, setAuthorLastName ] = useState('');
	const [ textContent, setTextContent ] = useState('');
	const [ genre, setGenre ] = useState('');

	const [ phraseTitle, setPhraseTitle ] = useState(false);
	const [ phraseFirstName, setPhraseFirstName ] = useState(false);
	const [ phraseLastName, setPhraseLastName ] = useState(false);
	const [ phraseGenre, setPhraseGenre ] = useState(false);
	const [ phraseTextContent, setPhraseTextContent ] = useState(false);

	const [ mustTitle, setMustTitle ] = useState(false);
	const [ mustFirstName, setMustFirstName ] = useState(false);
	const [ mustLastName, setMustLastName ] = useState(false);
	const [ mustGenre, setMustGenre ] = useState(false);
	const [ mustTextContent, setMustTextContent ] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		const list = [];

		if (title.length != 0) {
			const data = {};
			data.field = 'title';
			data.value = title;
			data.phraseQuery = phraseTitle;
			data.logic = mustTitle ? 'AND' : 'OR';

			list.push(data);
		}
		if (authorFirstName.length != 0) {
			const data = {};
			data.field = 'authorFirstName';
			data.value = authorFirstName;
			data.phraseQuery = phraseFirstName;
			data.logic = mustFirstName ? 'AND' : 'OR';

			list.push(data);
		}
		if (authorLastName.length != 0) {
			const data = {};
			data.field = 'authorLastName';
			data.value = authorLastName;
			data.phraseQuery = phraseLastName;
			data.logic = mustLastName ? 'AND' : 'OR';

			list.push(data);
		}
		if (genre.length != 0) {
			const data = {};
			data.field = 'genre';
			data.value = genre;
			data.phraseQuery = phraseGenre;
			data.logic = mustGenre ? 'AND' : 'OR';

			list.push(data);
		}
		if (textContent.length != 0) {
			const data = {};
			data.field = 'textContent';
			data.value = textContent;
			data.phraseQuery = phraseTextContent;
			data.logic = mustTextContent ? 'AND' : 'OR';

			list.push(data);
		}

		console.table(list);

		props.searchBook(list);
	};

	return (
		<div className='ui container'>
			<Divider horizontal>
				<Header as='h2'>Претражите Књиге</Header>
			</Divider>
			<Grid columns={2}>
				<Grid.Column>
					<Segment>
						<form onSubmit={onSubmit} className='ui form error'>
							<div className='three fields'>
								<div className='field'>
									<label>Наслов</label>
									<input
										type='text'
										name='title'
										id='title'
										placeholder='Наслов'
										value={title}
										onChange={(e) =>
											setTitle(e.target.value)}
									/>
								</div>
								<div className='field'>
									<label>Фраза</label>
									<Checkbox
										toggle
										checked={phraseTitle}
										onChange={() =>
											setPhraseTitle(!phraseTitle)}
									/>
								</div>
								<div className='field'>
									<label>ИЛИ/И</label>
									<Checkbox
										toggle
										checked={mustTitle}
										onChange={() =>
											setMustTitle(!mustTitle)}
									/>
								</div>
							</div>
							<div className='three fields'>
								<div className='field'>
									<label>Име Аутора</label>
									<input
										type='text'
										name='title'
										id='title'
										placeholder='Име Аутора'
										value={authorFirstName}
										onChange={(e) =>
											setAuthorFirstName(
												e.target.value
											)}
									/>
								</div>
								<div className='field'>
									<label>Фраза</label>
									<Checkbox
										toggle
										checked={phraseFirstName}
										onChange={() =>
											setPhraseFirstName(
												!phraseFirstName
											)}
									/>
								</div>
								<div className='field'>
									<label>ИЛИ/И</label>
									<Checkbox
										toggle
										checked={mustFirstName}
										onChange={() =>
											setMustFirstName(
												!mustFirstName
											)}
									/>
								</div>
							</div>

							<div className='three fields'>
								<div className='field'>
									<label>Презиме Аутора</label>
									<input
										type='text'
										name='title'
										id='title'
										placeholder='Презиме Аутора'
										value={authorLastName}
										onChange={(e) =>
											setAuthorLastName(
												e.target.value
											)}
									/>
								</div>
								<div className='field'>
									<label>Фраза</label>
									<Checkbox
										toggle
										checked={phraseLastName}
										onChange={() =>
											setPhraseLastName(
												!phraseLastName
											)}
									/>
								</div>
								<div className='field'>
									<label>ИЛИ/И</label>
									<Checkbox
										toggle
										checked={mustLastName}
										onChange={() =>
											setMustLastName(!mustLastName)}
									/>
								</div>
							</div>
							<div className='three fields'>
								<div className='field'>
									<label>Жанр</label>
									<input
										type='text'
										name='genre'
										id='title'
										placeholder='Жанр'
										value={genre}
										onChange={(e) =>
											setGenre(e.target.value)}
									/>
								</div>
								<div className='field'>
									<label>Фраза</label>
									<Checkbox
										toggle
										checked={phraseGenre}
										onChange={() =>
											setPhraseGenre(!phraseGenre)}
									/>
								</div>
								<div className='field'>
									<label>ИЛИ/И</label>
									<Checkbox
										toggle
										checked={mustGenre}
										onChange={() =>
											setMustGenre(!mustGenre)}
									/>
								</div>
							</div>
							<div className='three fields'>
								<div className='field'>
									<label>Садржај</label>
									<textarea
										id=''
										placeholder='Садржај'
										value={textContent}
										onChange={(e) =>
											setTextContent(e.target.value)}
									/>
								</div>
								<div className='field'>
									<label>Фраза</label>
									<Checkbox
										toggle
										checked={phraseTextContent}
										onChange={() =>
											setPhraseTextContent(
												!phraseTextContent
											)}
									/>
								</div>
								<div className='field'>
									<label>ИЛИ/И</label>
									<Checkbox
										toggle
										checked={mustTextContent}
										onChange={() =>
											setMustTextContent(
												!mustTextContent
											)}
									/>
								</div>
							</div>
							<div className='field'>
								<div
									className='button green ui fluid'
									onClick={onSubmit}
								>
									Претражи
								</div>
							</div>
						</form>
					</Segment>
				</Grid.Column>
				<Grid.Column>
					<Segment>
						<Card.Group itemsPerRow={2}>
							{props.books.map((i) => {
								return (
									<OneBook
										key={
											i.textContent +
											i.id +
											i.authorFirstName
										}
										isbn={i.isbn}
										authorFirstName={i.authorFirstName}
										authorLastName={i.authorLastName}
										title={i.title}
										genre={i.genre}
										textContent={i.textContent}
										url={i.url}
									/>
								);
							})}
						</Card.Group>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	books: state.books.books,
});

const mapDispatchToProps = { searchBook };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookContainer);
