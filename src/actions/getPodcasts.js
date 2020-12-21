export const getPodcasts = () => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/podcasts')
        .then(resp => resp.json())
        .then(pods => {
          if (pods.error) {
            alert(pods.error)
          } else {
            dispatch({type: 'GET_PODCASTS', payload: pods})
          }
        })
    }
  }