import { useAuthContext } from "@/contexts/AuthContext";
import {
  googleLogout,
  TokenResponse,
  useGoogleLogin,
} from "@react-oauth/google";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const useProfileButton = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [user, setUser] = useState<TokenResponse>();
  const { auth, setAuth } = useAuthContext();

  const menuRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpen(false);
      }
    });

    const accessToken = user?.access_token ||
      localStorage.getItem("access_token");
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Accept: "application/json",
            },
          },
        )
        .then((res) => {
          setAuth({ access_token: accessToken, ...res.data });
        })
        .catch(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("cart");
        });
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("access_token");
    localStorage.removeItem("cart");
    setAuth(null);
  };

  return {
    isOpen,
    setOpen,
    login,
    logOut,
    auth,
    imgRef,
    menuRef,
    isCartOpen,
    setCartOpen,
  };
};
