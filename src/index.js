import React from 'react';
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );



createRoot(document.getElementById("root")).render(
  <App />
);

