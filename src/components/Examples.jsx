import { useState } from 'react';

import Tabs from './Tabs';
import TabButton from "./TabButton";
import Section from "./Section";

import { EXAMPLES } from '../data';

export default function Examples() {
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
        <Section id="examples">
            <h2>Examples</h2>
            <Tabs
                // ButtonsContainer = "menu"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleSelect("components")}>Components</TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onClick={() => handleSelect("jsx")}>Jsx</TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onClick={() => handleSelect("props")}>Props</TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onClick={() => handleSelect("state")}>State</TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>

        </Section>

    )
}