import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'


export default function pageProduct(state = {},action){
	
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.types ||action.type){
		case REQUESTING:
		newState.loading = 2;
		break;
		case REQUEST_END:
		newState.data = action.response;
		break;
		case REQUEST_ERROR:
		newState.loding = 0;
		break;
	}
	return newState;
}