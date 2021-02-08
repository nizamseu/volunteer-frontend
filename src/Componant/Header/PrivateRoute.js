import React, { useContext } from 'react';
import { Route,Redirect } from 'react-router-dom';
import { userAuth } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [user,]=useContext(userAuth)


    return (
        <div>
                <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;