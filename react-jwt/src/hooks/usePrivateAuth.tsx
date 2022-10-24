import { useEffect } from "react";
import { User } from "../POJO/User";
import { weatherInstance } from "../services/AuthAxiosService";
import { SignIn } from "../services/LoginService";
import { useAuthContext } from "./AuthProvider";

const usePrivateAuth = () => {
  const { acessToken, setAcessToken, user, pass } = useAuthContext();
  useEffect(() => {
    weatherInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 && acessToken) {
            console.log('Request não Autorizado')
          const userRequest: User = { Username: user, Password: pass };
          SignIn(userRequest).then((res) => {
            setAcessToken(res);
          });
        }
      }
    );
  }, [])
  return weatherInstance
};
export default usePrivateAuth;
