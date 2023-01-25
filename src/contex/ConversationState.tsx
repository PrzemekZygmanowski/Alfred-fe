import { createContext, useReducer } from "react";
import { Conversation, ConversationProviderProps } from "./conversation.types";
import ConversationReducer from "./ConversationReducer";

const initialState = {
  conversations: [
    { message: "cześć", answer: "Cześć Przemek" },
    {
      message: "Jak masz na imię?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
  ],
};

export const ConversationContext: React.Context<{
  conversations: Conversation[];
}> = createContext(initialState);

export const ConversationProvider = ({
  children,
}: ConversationProviderProps) => {
  const [state, dispatch] = useReducer(ConversationReducer, initialState);

  const addConversation = (conversation: Conversation) => {
    dispatch({
      type: "ADD_CONVERSATION",
      payload: conversation,
    });
  };

  return (
    <ConversationContext.Provider
      value={{ conversations: state.conversations }}>
      {children}
    </ConversationContext.Provider>
  );
};
