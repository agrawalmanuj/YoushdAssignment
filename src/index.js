import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoDashboard from './components/App';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import PrivateWrapper from './routes/privateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={(
          <PrivateWrapper>
            <ToDoDashboard />
          </PrivateWrapper>
        )}>
        </Route>
        <Route path="/login" exact element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
