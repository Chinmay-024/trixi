export const getUsersStart = () => ({
	type: "GET_UserS_START",
});

export const getUsersSuccess = (users) => ({
	type: "GET_UserS_SUCCESS",
	payload: users,
});

export const getUsersFailure = () => ({
	type: "GET_UserS_FAILURE",
});

export const createUserStart = () => ({
	type: "CREATE_User_START",
});

export const createUserSuccess = (user) => ({
	type: "CREATE_User_SUCCESS",
	payload: user,
});

export const createUserFailure = () => ({
	type: "CREATE_User_FAILURE",
});

export const updateUserStart = () => ({
	type: "UPDATE_User_START",
});

export const updateUserSuccess = (user) => ({
	type: "UPDATE_User_SUCCESS",
	payload: user,
});

export const updateUserFailure = () => ({
	type: "UPDATE_User_FAILURE",
});

export const deleteUserStart = () => ({
	type: "DELETE_User_START",
});

export const deleteUserSuccess = (id) => ({
	type: "DELETE_User_SUCCESS",
	payload: id,
});

export const deleteUserFailure = () => ({
	type: "DELETE_User_FAILURE",
});
