import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import HoverCounter from './Components/HoverCounter';
import User from './Components/User';

function App() {
  return (
    <div className="app">

      {/* first step */}
      {/* <Counter>
        render={(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter> */}

      <Counter>
        {(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      </Counter>

      <User render={(isLoggedIn) => (isLoggedIn ? 'Riyead Rahman' : 'Guest')} />

    </div>
  );
}

export default App;
