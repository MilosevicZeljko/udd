import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookReducer from './bookReducer';
import readerReducer from './readerReducer';

export default combineReducers({
	form: formReducer,
	books: bookReducer,
	readers: readerReducer,
});
