import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            prevPathh: rest.location.pathname,
          },
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.prototype = {
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
  isClosed: Proptypes.bool,
};
