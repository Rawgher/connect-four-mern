import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import UserForm from './components/UserForm/UserForm';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { setCurrentUser } from './store/user/user.action';

function App({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUser(user));
    }
  }, [dispatch, user]);

  return (
    <Routes>
      <Route index element={<UserForm />} />
      <Route path="welcome" element={<WelcomePage user={user} />} />
    </Routes>
  );
}

export default App;
