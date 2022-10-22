import React from 'react';
import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import Section from './Components/Section';
import ThemeContext from './contexts/themeContext';

export default class App extends React.Component {
  state = {
    theme: 'dark',
  };

  render() {
    const { theme } = this.state;

    return (
      <div className="app">

        <Counter>
          {(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        </Counter>

        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
        
      </div>
    );
  }
}

