import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import UserForm from './components/UserForm/UserForm';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserForm />} />
          <Route path="welcome" element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
