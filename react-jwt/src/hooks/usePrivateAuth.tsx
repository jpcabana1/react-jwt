import { useEffect } from "react";
import { User } from "../POJO/User";
import { weatherInstance } from "../services/AuthAxiosService";
import { getPass, getToken, getUser, saveToken, SignIn } from "../services/LoginService";
import { useAuthContext } from "./AuthProvider";

const usePrivateAuth = () => {
  const { acessToken, setAcessToken, user, pass } = useAuthContext();

  const token: string | undefined = getToken()
  
  useEffect(() => {
    weatherInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 && token) {
          const userRequest: User = { Username: getUser(), Password: getPass() };
         await SignIn(userRequest)
          .then((res) => {
            //setAcessToken(res);
            saveToken(res)
          })
          .catch(err => console.log(err));
        }
      }
    );
  }, [])
  return weatherInstance
};
export default usePrivateAuth;
