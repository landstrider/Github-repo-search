const initialState = {
  isFetching: false,
  data: [],
  errMsg: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING': 
      return {
        ...state,
        isFetching: action.payload,
      }
    case 'FETCH_REPO_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        errMsg: '',
        data: [...action.payload]
      };
      case 'FETCH_REPO_DATA_FAILURE':
      return {
        ...state,
        errMsg: 'Could Not Fetch Data'
      }
    case 'CLEAR_REPO_DATA':
      return {
        ...state,
        data: [],
      }
    default:
    return state;
  }

} 

export default reducer;
