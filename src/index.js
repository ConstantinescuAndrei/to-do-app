import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, lightGreen } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import store from './Redux/store';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightGreen
  }
})
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

