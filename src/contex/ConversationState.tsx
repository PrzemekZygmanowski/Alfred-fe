import { createContext, useReducer } from "react";
import {
  Conversation,
  ConversationContextType,
  ConversationProviderProps,
} from "./conversation.types";
import ConversationReducer from "./ConversationReducer";

const initialState = {
  conversations: [
    // { message: "cześć", answer: "Cześć Przemek" },
    // {
    //   message: "Jak masz na imię?",
    //   answer:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    // },
  ],
};

export const ConversationContext =
  createContext<ConversationContextType | null>(null);

export const ConversationProvider = ({
  children,
}: ConversationProviderProps) => {
  const [state, dispatch] = useReducer(ConversationReducer, initialState);

  const addConversation = (conversation: Conversation): void => {
    dispatch({
      type: "ADD_CONVERSATION",
      payload: conversation,
    });
  };

  return (
    <ConversationContext.Provider
      value={{ conversations: state.conversations, addConversation }}>
      {children}
    </ConversationContext.Provider>
  );
};
