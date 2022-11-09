import React from 'react';
import { Route, Switch } from 'react-router';

export const RenderRoutes = ({ routes }) => {
  return (
    <>
    {/* <Switch> */}
      {routes.map((route, _) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      
    {/* </Switch> */}
    </>
  );
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.subRoutes} />}
    />
  );
}