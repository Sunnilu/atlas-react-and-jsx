import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import HelpfulResource from './components/HelpfulResource';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      {/* What is React Section */}
      <Section title="What is React?">
        <p>
          React is a JavaScript library for building fast and interactive user interfaces. It allows developers to create reusable components, manage application state efficiently, and deliver dynamic web experiences. Built by Facebook, React is declarative, component-based, and widely adopted for both personal and enterprise-grade projects.
        </p>
      </Section>

      {/* Benefits of React Section */}
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components make development more efficient</li>
          <li>Virtual DOM improves rendering performance</li>
          <li>Strong community and ecosystem support</li>
          <li>Declarative syntax makes code easier to read and debug</li>
          <li>Great for building single-page applications (SPAs)</li>
        </ul>
      </Section>

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

      {/* About Me Section */}
      <AboutMe />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;



