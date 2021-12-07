import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./ApolloClient/client";
import Home from "./ui/home";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
