import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/component/common/App';
import Index from '../app/component/news-more/Index.jsx';
ReactDOM.render(<App page={Index} />,document.getElementById('app'));