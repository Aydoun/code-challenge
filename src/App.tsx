import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_MARKET } from 'gql/assets';

function App() {
  const { loading, error, data } = useQuery(GET_MARKET);
  return loading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>;
}

export default App;
