import { useMutation,useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const {data} = await mutate({variables:{credentials:{username:username,password:password}}});
    const accessToken = data.authenticate.accessToken;
    await authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;
