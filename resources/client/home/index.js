import React from 'react';
import ReactDOM from 'react-dom';
// console.log(window.DATA_BS);
if (module.hot) {
    module.hot.accept();
}
const App = () => (
    <div>
        <p>im da hi!</p>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));