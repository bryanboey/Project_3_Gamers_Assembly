import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import AuthForms from "./components/auth/AuthForms";
import Landing from "./components/landing/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import Query from "./components/query/Query";
import { useDispatch } from "react-redux";
import { userAuth } from "./store/actions/authActions";
import ChangePasswordForm from "./components/auth/ChangePasswordForm";
import UserDetails from "./components/userdetails/UserDetails";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuth());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/search" component={Query} />

        <Route path="/user/:id" component={UserDetails} />
        <Route path="/login">
          <AuthForms tab={"login"} />
        </Route>
        <Route path="/register">
          <AuthForms tab={"register"} />
        </Route>
        <Route path="/changepassword" component={ChangePasswordForm} />
      </Switch>
    </>
  );
}
