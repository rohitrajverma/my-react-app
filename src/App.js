import React from 'react';
import './App.css';
import Currency from './components/Currency';
import ThemeSwitch from './components/ThemeSwitch';
import { ThemeContext } from './context';
import AppRouter from './AppRouter';
import Header from './containers/Header';

class App extends React.Component {
  state = {
    currency: 'INR',
    theme: 'light'
  }
  render() {
    // let currency = this.state.currency;
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state.theme}>

          <Header>
            <Currency currencyChange={code => this.setState({ currency: code })} />
            <ThemeSwitch changeTheme={(theme) => this.setState({ theme })} />
          </Header>

          <AppRouter />
        </ThemeContext.Provider>
      </div >
    );
  }
}

export default App;
