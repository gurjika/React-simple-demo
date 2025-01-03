import { EXAMPLES } from '../data.js'
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {


    const [ selectedTopic, setSelectedTopic ] = useState();


    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    } 
  
  
    let tabContent = <p>Please select a topic.</p>
  
    if (selectedTopic) {
      tabContent = (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div> 
      );
    }


    return (
        // <section id='examples'>
        <Section title='Examples' id='examples'>

            <Tabs
            buttonsContainer='menu' 
            buttons={
            <>
                <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </>}>
            {tabContent}
            </Tabs>


          {/* <menu>
            <TabButton
             onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>

          </menu> */}

            {/* {selectedTopic === undefined ? <p>Please select a topic.</p> :             
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
            </div> } */}

            
        </Section>

        // </section>
    )
}