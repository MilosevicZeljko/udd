const initState = {
	books: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'SEARCH_BOOK':
			console.log('payload', action.payload);
			return { ...state, books: action.payload };
		case 'CLEAR_BOOKS':
			return initState;
		default:
			return state;
	}
};
