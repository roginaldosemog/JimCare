import initialState from './initialState';
import { SET_USERNAME } from '../actions/types';

const counselorReducer = (state = initialState.user, action) => {
	if (action === undefined) {
		// logWarn(FILE_NAME, 'counselorReducer',
		//   `ERROR: Action is undefined: ${JSON.stringify(action, null, 2)}`);
		return state;
	}

	switch (action.type) {
		case SET_USERNAME:
		return {
			...state,
			name: action.payload.username,
		};
		default:
		return state;
	}
};

export default counselorReducer;
