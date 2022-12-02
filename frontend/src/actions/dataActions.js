
import axios from 'axios'
import { DATA_LIST_FAIL, DATA_LIST_REQUEST, DATA_LIST_SUCCESS } from '../constants/dataCostants'




export const listData = () => async (dispatch) => {
	try {
		dispatch({ type: DATA_LIST_REQUEST })

		// Get userInfo from userLogin by destructuring
		
  
		// Make get request to get list of users
		const  {data}  = await axios.get('https://teachforindia-production.up.railway.app/api/data')

		dispatch({
			type: DATA_LIST_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: DATA_LIST_FAIL,
			payload:
				// Send a custom error message
				// Else send a generic error message
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}