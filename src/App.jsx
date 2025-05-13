import React from 'react';
import Greeting from './components/Greeting';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Greeting />

      <Section title="What is react?">
        <p>
          React is a JavaScript library for building fast and interactive user interfaces using
          reusable components. It makes front-end development more efficient through its use
          of a virtual DOM and declarative UI.
        </p>
      </Section>

      <Section title="Benefits of react">
        <ul>
          <li>Reusable components</li>
          <li>Fast rendering with virtual DOM</li>
          <li>Strong community support</li>
          <li>Easy to learn and integrate</li>
          <li>Great ecosystem of tools and libraries</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;

