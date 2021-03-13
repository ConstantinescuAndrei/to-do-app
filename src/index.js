import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, lightGreen } from '@material-ui/core/colors';
import { createStore } from 'redux';
import allReducers from './Redux/reducers';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightGreen
  }
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

