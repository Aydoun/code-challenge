import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_MARKET } from 'gql/assets';
import { Router } from './Router';

export default () => (
  <Router data-testid="router" />
);