const initState = {
	books: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'SEARCH_BOOK':
			return { ...state, books: action.payload };
		default:
			return state;
	}
};
