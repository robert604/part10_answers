import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

const apolloURI = Constants.manifest.extra.apolloURI;

const httpLink = createHttpLink({
  // Replace the IP address part with your own IP address!
  uri: apolloURI 
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;