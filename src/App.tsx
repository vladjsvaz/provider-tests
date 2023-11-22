import { useCallback, useState } from 'react'

import './App.css'
import { MessageContext, MessageState } from './Contexts/MessageContext';
import { defaultState } from './constants';
import { CallContext1 } from './CallContext1';
import { CallContext2 } from './CallContext2';

function App() {
  const [messageValues, setMessageValues] = useState<MessageState>(defaultState);
  const [isOpen, setIsOpen] = useState(false);

  function messageDispatch(newState: MessageState) {
    setMessageValues(newState);
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && 
        <div className='message'>
        <div className='inner-message'>
          <h3>{messageValues.title}</h3>
          <h4>{messageValues.description}</h4>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
        </div>
      }
      <MessageContext.Provider value={useCallback(messageDispatch, [])}>
        <h1>Context example</h1>

        <CallContext1 />
        <CallContext2 />

      </MessageContext.Provider>
    </>
  )
}

export default App
