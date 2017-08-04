import { resetSurfboardForm } from './surfboardForm';

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setSurfboards = surfboards => {
  return {
    type: 'GET_SURFBOARDS_SUCCESS',
    surfboards
  }
}

const addSurfboard = surfboard => {
  return {
    type: 'CREATE_SURFBOARD_SUCCESS',
    surfboard
  }
} 

// ** Async Actions **
export const getSurfboards = () => {
  return dispatch => {
    return fetch(`${API_URL}/surfboards`)
      .then(response => response.json())
      .then(surfboards => dispatch(setSurfboards(surfboards)))
      .catch(error => console.log(error));
  }
}

export const createSurfboard = surfboard => {
  return dispatch => {
    return fetch(`${API_URL}/surfboards`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ surfboard: surfboard })
    })
      .then(response => response.json())
      .then(surfboard => {
        dispatch(addSurfboard(surfboard))
        dispatch(resetSurfboardForm())
      })
      .catch(error => console.log(error))
  }
}
