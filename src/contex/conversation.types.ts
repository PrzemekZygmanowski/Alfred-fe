import { ReactNode } from "react";

export interface Conversation {
  message: string;
  answer: string;
}

export interface ConversationProviderProps {
  children?: ReactNode;
}

export interface ConversationAction {
  type: string;
  payload: Conversation;
}

export interface ConversationContextType {
  conversations: Conversation[];
  addConversation: (conversation: Conversation) => void;
}
