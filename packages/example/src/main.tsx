import React from 'react';
import ReactDOM from 'react-dom/client';
import { scanVite } from '@jswork/scan-modules';
import ReactCommandManager from '@jswork/react-command-manager/src/main';

const moduleFiles = import.meta.glob('./shared/commands/**/*.ts', { eager: true });
const modules = scanVite(moduleFiles, { modules: '/commands/' });

import App from './app';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactCommandManager modules={modules}>
    <App />
  </ReactCommandManager>,
);
