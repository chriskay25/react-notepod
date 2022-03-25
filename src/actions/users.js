export const login = (data) => async (dispatch) => {
  let user = data;
  try {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    console.log("dat login data: ", data);
    if (data.error) {
      alert("Invalid Credentials");
    } else {
      localStorage.setItem("token", data.jwt);
      dispatch({ type: "LOGIN", payload: data.user });
    }
  } catch (err) {
    console.log("Login error: ", err);
  }
};
