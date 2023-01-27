import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { ConversationContextType } from "../contex/conversation.types";
import { ConversationContext } from "../contex/ConversationState";

interface messageT {
  message: string;
}

export interface Answer {
  answer: string;
}

export const ChatForm = () => {
  const { addConversation } = useContext(
    ConversationContext
  ) as ConversationContextType;

  const askAlfred = async (message: string): Promise<void> => {
    const response = await fetch("http://localhost:3000/messages", {
      method: "POST",
      body: message,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { answer } = await response.json();
    const messageVal = JSON.parse(message);

    const conversation = {
      message: messageVal.message,
      answer: answer,
    };
    console.log(conversation);

    addConversation(conversation);
  };

  const initialValues: messageT = { message: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const message = JSON.stringify(values, null, 2);
        setTimeout(() => {
          askAlfred(message);

          setSubmitting(false);
        }, 400);
      }}>
      <Form className='flex flex-row w-3/5 h-10 my-8 '>
        <Field
          name='message'
          type='text'
          placeholder='Napisz coś...'
          className='bg-green text-lightBrown rounded rounded-r-none border-brown border-2 border-r-0 w-full outline-0 py-4'
        />
        <button
          className='bg-brown text-green rounded rounded-l-none border-brown border-2 '
          type='submit'>
          <span className='p-4'>Wyślij</span>
        </button>
      </Form>
    </Formik>
  );
};
