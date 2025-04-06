import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectActiveUser = (isLoggedIn, path) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(path);
    }
  }, [isLoggedIn]);
};  