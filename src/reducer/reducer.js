const initialState = {
  isFetching: false,
  data: [],
  errMsg: '',
  pageNumber: 1,
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
    case 'UPDATE_PAGE_NUMBER': {
      const { pageNumber } = state;
      if (action.payload === 'left' && pageNumber > 1) {
        return {
          ...state,
          pageNumber: pageNumber - 1,
        }
      } else if (action.payload === 'right' && pageNumber < Math.ceil(state.data.length % 9)) {
        return {
          ...state,
          pageNumber: pageNumber + 1,
        }
      } else return state;
    }
    case 'RESET_PAGE_NUMBER':
      return {
        ...state,
        pageNumber: 1,
      }
    default:
    return state;
  }
} 

export default reducer;
