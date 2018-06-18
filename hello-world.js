module.hot.accept('./containers/rootContainer.js', () => {
    const NextRootContainer = require('./containers/rootContainer.js').default;
    render(<NextRootContainer />, document.getElementById('react-root'));
});
