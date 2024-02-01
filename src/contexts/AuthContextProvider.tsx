"use client";

import { ReactNode, useState } from "react";
import { AuthContext, User } from "./AuthContext";

interface props {
  children: ReactNode;
}

export default function AuthContextProvider({ children }: props) {
  const [auth, setAuth] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
