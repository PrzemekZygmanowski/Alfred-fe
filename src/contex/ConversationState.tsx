import { createContext, ReactNode, useReducer } from "react";
import ConversationReducer from "./ConversationReducer";

interface Conversation {
  conversation: {
    message: string;
    answer: string;
  };
}
interface ConversationContextT {
  conversations: Conversation[];
  updateConversations: (conversation: Conversation) => void;
}

interface ConversationProviderProps {
  children?: ReactNode;
}

const initialState = {
  conversations: [
    { message: "cześć", answer: "Cześć Przemek" },
    {
      message: "Jak masz na imię",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
    },
  ],
};

export const ConversationContext: React.Context<{
  conversations: {
    message: string;
    answer: string;
  }[];
}> = createContext(initialState);

export const ConversationProvider = ({
  children,
}: ConversationProviderProps) => {
  const [state, dispatch] = useReducer(ConversationReducer, initialState);

  return (
    <ConversationContext.Provider
      value={{ conversations: state.conversations }}>
      {children}
    </ConversationContext.Provider>
  );
};
