import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});