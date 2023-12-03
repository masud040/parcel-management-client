import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
