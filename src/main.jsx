import React from 'react';
import ReactDOM from 'react-dom';
import ParamsEditor from './ParamsEditor';
import { params, model } from './data';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ParamsEditor params={params} model={model} />
  </React.StrictMode>,
  document.getElementById('root')
);