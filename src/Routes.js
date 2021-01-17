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
    path: "/party",
    component: lazy(() => import("./components/Party/Party")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/profile",
    component: lazy(() => import("./components/Profile/Profile")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/create",
    component: lazy(() => import("./components/Profile/Create")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/edit",
    component: lazy(() => import("./components/Profile/Edit")),
  },
  {
    exact: true,
    //guard: GuestGuard,
    path: "/home",
    component: lazy(() => import("./components/Home/Home")),
  },
];

export default routes;
