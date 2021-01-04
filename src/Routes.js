import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";

export const renderRoutes = (routes = []) => (

<Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        //const Guard = route.guard || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) =>
              route.routes ? (
                renderRoutes(route.routes)
              ) : (
                <Component {...props} />
              )
            }
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    //guard: GuestGuard,
    path: "/signup",
    component: lazy(() => import("./components/Auth/Signup/Signup")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/",
    component: lazy(() => import("./components/Auth/Signin/Signin")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/event",
    component: lazy(() => import("./components/Event/Event")),
  },
];

export default routes;