import { useContext } from "react";
import { MessageContext } from "./Contexts/MessageContext";

export const CallContext1 = () => {
  const dispatch = useContext(MessageContext);

  function handleClick() {
    dispatch({
      title: 'Hello!',
      description: 'This is a message from Caller 1.',
    });
  }

  return (
    <div className="caller">
      <h2>Caller 1</h2>
      <button onClick={handleClick}>Send message</button>
    </div>
  )
}
