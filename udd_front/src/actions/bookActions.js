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
