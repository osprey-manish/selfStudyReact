import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png";
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';

// import TabButton from "./TabButton.jsx";
// import Example from "./Example.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";




function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  
  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcept key={c.title} {...c} />
            ))}
          </ul>
        </section>

        <section id="examples">
            <menu>
               <li>
                  <button onClick={() => handleClick('components')}>
                    Components
                  </button>
                </li>
                <li>
                  <button onClick={() => handleClick('jsx')}>
                    JSX
                  </button>
                </li>
                <li>
                  <button onClick={() => handleClick('props')}>
                    Props
                  </button>
                </li>
                <li>
                  <button onClick={() => handleClick('state')}>
                    State
                  </button>
                </li>
            </menu>
            {tabContent}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;