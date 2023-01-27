import { ConversationAction } from "./conversation.types";

export default (state: any, action: ConversationAction) => {
  switch (action.type) {
    case "ADD_CONVERSATION":
      return {
        ...state,
        conversations: [action.payload, ...state.conversations],
      };
    default:
      return state;
  }
};
