import { useContext } from "react";
import { MessageContext } from "./Contexts/MessageContext";

export const CallContext2 = () => {
  const dispatch = useContext(MessageContext);

  function handleClick() {
    dispatch({
      title: 'Good morning!',
      description: 'Caller 2 sending message!',
    });
  }

  return (
    <div className="caller">
      <h2>Caller 2</h2>
      <button onClick={handleClick}>Send message</button>
    </div>
  )
}
