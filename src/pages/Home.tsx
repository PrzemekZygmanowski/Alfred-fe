import { Avatar } from "../components/Avatar";
import { ChatContent } from "../components/ChatContent";
import { ChatForm } from "../components/ChatForm";
import { ConversationProvider } from "../contex/ConversationState";

export const Home = () => (
  <ConversationProvider>
    <div className='bg-darkGreen h-screen flex flex-col items justify-center items-center'>
      <Avatar />
      <ChatContent />
      <ChatForm />
    </div>
  </ConversationProvider>
);
