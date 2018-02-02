
import {REQUEST_ERROR,REQUESTING,REQUEST_END} from '../../constants/AJAXconstants'


export function homePge(parmas){
	
	return{
		types:[REQUEST_ERROR,REQUESTING,REQUEST_END],
		url:'product/',
		params:{page:parmas.page,qty:parmas.qty}
	}
}