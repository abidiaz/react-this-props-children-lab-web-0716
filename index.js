const React = require('react');
const ReactDOM = require('react-dom');

const Invitation = require('./components/Invitation');
const ThemedParty = require('./components/ThemedDecorations');

ReactDOM.render(
  <div>
    <Invitation></Invitation>
    <ThemedParty theme="heaven">
      <ThemedDecorations>
      </ThemedDecorations>
    </ThemedParty>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
