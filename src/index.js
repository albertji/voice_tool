import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import Main from './router/main';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

/*初始化*/
renderWithHotReload();

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/main', () => {
    renderWithHotReload();
  });
}

function renderWithHotReload() {
  ReactDom.render(
    <LocaleProvider locale={zh_CN}>
      <AppContainer>
        <Provider store={store}>
          <Main></Main>
        </Provider>
      </AppContainer>
    </LocaleProvider>,
    document.getElementById('app')
  )
}