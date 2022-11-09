import React from "react";
import { Redirect } from "react-router-dom";
import SignUpForm from "./src/components/signup";
import Layout from "./src/components/layout";

const RenderComponent = ({ Component }) => (
  <Layout>
    <Component />
  </Layout>
)

const ROUTES = [
  // {
  //   path: "/signup",
  //   exact: true,
  //   key: "SignUpForm",
  //   component: props => {
  //     return <RenderComponent Component={SignUpForm}/>;
  //   }
  // }
];

export default ROUTES;
