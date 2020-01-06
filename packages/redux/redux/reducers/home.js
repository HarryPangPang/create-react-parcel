const home_state = {
    username:'hello,parcel'
}

const home = (state = home_state, action) => {
    switch (action.type) {
		case "GET_USERNAME":
            return state;
        case "SET_USERNAME":
            return { ...state, username: action.data };
		default:
			return state;
	}
};

export default home;