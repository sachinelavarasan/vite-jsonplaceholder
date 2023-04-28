import { createContext } from "react";

export const initialState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  priLoading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "userslist": {
      return {
        ...state,
        users: action.users,
      };
    }
    case "loading": {
      return {
        ...state,
        isLoading: action.loading,
      };
    }
    case "pri_loading": {
      return {
        ...state,
        priLoading: action.loading,
      };
    }
    case "selectuser": {
      return {
        ...state,
        selectedUser: action.user,
      };
    }
  }
};

export const UsersContext = createContext(null);
export const UsersDispatchContext = createContext(null);
