import { Loader } from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import ContactsView from 'views/ContactsView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import { Route, Routes } from 'react-router-dom';
import operations from 'redux/auth/auth_operations';
import { useEffect } from 'react';

export const Phonebook = () => {
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />

          <Routes>
            <Route
              index
              path="/"
              element={<PublicRoute component={<HomeView />} />}
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsView />}
                  redirectTo="/login"
                />
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute
                  component={<LoginView />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute
                  component={<RegisterView />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};
