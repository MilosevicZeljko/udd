import axios from '../api/axios';
import history from '../history';

export const createBook = (data) => async (dispatch) => {
	axios
		.post('/api/book/', data)
		.then((response) => {
			alert('Направљено');
			history.push('/');
		})
		.catch((error) => {
			alert('Грешка');
		});
};

export const searchBook = (data) => async (dispatch) => {
	dispatch(clearBooks());
	axios.post('/api/book/search', data).then((response) => {
		console.log('response', response.data);
		dispatch({
			type: 'SEARCH_BOOK',
			payload: response.data,
		});
	});
};

export const clearBooks = () => ({
	type: 'CLEAR_BOOKS',
});
