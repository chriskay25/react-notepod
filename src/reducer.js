export default function reducer(state = {podcasts: []}, action) {
    switch (action.type) {
      case 'GET_PODCASTS':
        return {
          ...state,
          podcasts: action.payload
        }
      default:
        return state
    }
  }