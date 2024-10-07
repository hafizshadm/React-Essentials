import { useState } from 'react';
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  console.log(selectedTopic)

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please click a button</p>;

  if (selectedTopic) {
    tabContent = <section id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </section>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts {...conceptItem} />
            )
            )}
          </ul>
        </section>
        <section id="examples">
          <h3>Examples</h3>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
