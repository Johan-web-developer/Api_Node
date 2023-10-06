import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import DataTrainers from "./views/components/trainers.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/trainers" element={<DataTrainers />} />
      <Route path="/" element={<Components />} />
    </Routes>
  </HashRouter>
);
