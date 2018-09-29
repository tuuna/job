import "babel-polyfill"

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './views/New'
import store from './views/store.js';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './views/DevTools';
import './index.css';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

ReactDOM.render(<Provider store={store}>
  <div>
    <BrowserRouter>
      <LocaleProvider locale={zh_CN}>
        <App/>
      </LocaleProvider>
    </BrowserRouter>
    {/* <DevTools/> */}
  </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
