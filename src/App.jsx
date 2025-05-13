import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Helpful Resources Section */}
      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Docs"
          link="https://reactjs.org/docs/getting-started.html"
        />
        <HelpfulResource
          label="ReactJS Tutorial - freeCodeCamp"
          link="https://www.youtube.com/watch?v=bMknfKXIFA8"
        />
        <HelpfulResource
          label="React Docs Beta (New)"
          link="https://beta.reactjs.org/"
        />
      </Section>
    </div>
  );
}

export default App;


