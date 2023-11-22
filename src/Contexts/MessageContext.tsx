import { createContext } from "react";

export type MessageState = {
  title: string;
  description: string;
}

export const MessageContext = createContext<(T: MessageState) => void>(() => {});
