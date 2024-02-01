import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface User {
  name: string;
  email: string;
  picture: string;
  access_token: string;
}

export interface AuthState {
  auth: User | null;
  setAuth: Dispatch<SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthState | undefined>(
  undefined,
);

export function useAuthContext() {
  const state = useContext(AuthContext);

  if (state === undefined) {
    throw new Error("useAuthContext got a undefined value");
  }

  return {
    auth: state.auth,
    setAuth: state.setAuth,
  };
}
