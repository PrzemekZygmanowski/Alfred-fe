import { useContext } from "react";
import butler from "../assets/butler.png";
import hacker from "../assets/hacker.png";
import { ConversationContext } from "../contex/ConversationState";
import "./ChatContent.css";

// const conversations = [
//   { message: "cześć", answer: "Cześć Przemek" },
//   {
//     message: "Jak masz na imię",
//     answer:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ex officiis placeat cupiditate fugiat iusto fugit id quam ipsam aspernatur vitae blanditiis voluptas incidunt explicabo, dolor similique sed asperiores animi?",
//   },
// ];

export const ChatContent = () => {
  const { conversations } = useContext(ConversationContext);
  const indexSuffix = new Date();

  return (
    <div className='chat-content__container bg-green text-lightBrown rounded border-brown border-2 w-3/5 h-60 my-8 overflow-y-scroll'>
      {conversations?.map((qa, i) => {
        return (
          <div key={i}>
            <div className='bg-green text-lightBrown flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={hacker}
                  alt='me'
                />
              </div>
              <span className='min-h-fit basis-10/12'>{qa.message}</span>
            </div>
            <div className='bg-lightGreen text-lightBrown flex flex-row justify-items-start items-start '>
              <div className='m-2'>
                <img
                  className=' border-brown border-2 min-h-full rounded-full h-8  max-h-8 basis-2/12'
                  src={butler}
                  alt='alfred'
                />
              </div>
              <span className='min-h-fit basis-10/12'>{qa.answer}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
