export default function reducer(state = {podcast: null}, action) {
    switch (action.type) {
      case 'GET_PODCAST':
        return {
          ...state,
          podcast: action.payload
        }
      default:
        return state
    }
  }