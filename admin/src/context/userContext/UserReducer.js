const UserReducer = (state, action) => {
	switch (action.type) {
		case "GET_UserS_START":
			return {
				users: [],
				isFetching: true,
				error: false,
			};
		case "GET_UserS_SUCCESS":
			return {
				users: action.payload,
				isFetching: false,
				error: false,
			};
		case "GET_UserS_FAILURE":
			return {
				users: [],
				isFetching: false,
				error: true,
			};
		case "CREATE_User_START":
			return {
				...state,
				isFetching: true,
				error: false,
			};
		case "CREATE_User_SUCCESS":
			return {
				users: [...state.users, action.payload],
				isFetching: false,
				error: false,
			};
		case "CREATE_User_FAILURE":
			return {
				...state,
				isFetching: false,
				error: true,
			};
		case "UPLOAD_User_START":
			return {
				...state,
				isFetching: true,
				error: false,
			};
		case "UPLOAD_User_SUCCESS":
			return {
				users: state.users.map(
					(user) => user._id === action.payload._id && action.payload
				),
				isFetching: false,
				error: false,
			};
		case "UPLOAD_User_FAILURE":
			return {
				...state,
				isFetching: false,
				error: true,
			};
		case "DELETE_User_START":
			return {
				...state,
				isFetching: true,
				error: false,
			};
		case "DELETE_User_SUCCESS":
			return {
				users: state.users.filter((user) => user._id !== action.payload),
				isFetching: false,
				error: false,
			};
		case "DELETE_User_FAILURE":
			return {
				...state,
				isFetching: false,
				error: true,
			};
		default:
			return { ...state };
	}
};

export default UserReducer;
