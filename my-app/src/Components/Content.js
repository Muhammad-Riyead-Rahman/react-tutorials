import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default function Content() {
    console.log('Content rendered');

    return (
        <div>

            <h1>This is a content</h1>

            <Counter>
                {(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                count={counter}
                                incrementCount={incrementCount}
                                theme={theme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>

        </div>
    );
}
