import axios from '../api/axios';
import history from '../history';

export const createReader = (data) => async (dispatch) => {
	axios
		.post('/api/reader/', data, {})
		.then((response) => {
			alert('Направљено!');
			history.push('/');
		})
		.catch((error) => {
			alert('Грешка');
		});
};

export const searchReaders = (lat, lon, distance) => async (dispatch) => {
	axios
		.get(`/api/reader/lat/${lat}/lon/${lon}/distance/${distance}`)
		.then((response) => {
			dispatch({
				type: 'BETA_SEARCH',
				payload: response.data.hits.hits.map((hit) => {
					return hit.sourceAsMap;
				}),
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

export const clearReaders = () => ({
	type: 'CLEAR_READERS',
});
