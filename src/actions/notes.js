export const createNote = (noteData) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let note = noteData;
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/v1/notes", {
        headers: { "Content-Type": "application/json", Authorization: token },
        method: "post",
        body: JSON.stringify({ note }),
      });
      const data = await response.json();
      if (data.data) {
        dispatch({ type: "CREATE_NOTE", payload: data.data });
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      console.log("An error ocurred while trying to create note: ", err);
    }
  }
};

export const getNotes = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/v1/notes", {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const data = await response.json();
      if (data.data) {
        dispatch({ type: "GET_NOTES", payload: data.data });
      } else {
        alert("Couldn't get notes");
      }
    } catch (err) {
      console.log("An error occurred while trying to fetch notes: ", err);
    }
  }
};
