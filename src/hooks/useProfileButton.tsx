import { useAuthContext } from "@/contexts/AuthContext";
import { useAuth } from "@/store";
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
  // const { auth, setAuth } = useAuthContext();
  const { removeToken, setAcessToken } = useAuth((state) => state);

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

    const accessToken =
      user?.access_token || localStorage.getItem("access_token");
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
          setAcessToken({ ...res.data, access_token: accessToken });
        })
        .catch(() => {
          localStorage.removeItem("access_token");
          localStorage.removeItem("cart");
        });
    }
  }, [user, setAcessToken]);

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("access_token");
    localStorage.removeItem("cart");
    removeToken();
  };

  return {
    isOpen,
    setOpen,
    login,
    logOut,
    imgRef,
    menuRef,
    isCartOpen,
    setCartOpen,
  };
};
