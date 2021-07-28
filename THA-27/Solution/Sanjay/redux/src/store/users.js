export const login = user => {
  return {
    type: "LOGIN",
    payload: user
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    payload: null
  };
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      const { name, email } = action.payload;
      return {
        name: name,
        email: email
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default userReducer;
