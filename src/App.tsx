import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./ApolloClient/client";
import Home from "./ui/home";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
