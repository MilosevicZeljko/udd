const initState = {
	readers: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case 'BETA_SEARCH':
			return { ...state, readers: action.payload };
		default:
			return state;
	}
};
