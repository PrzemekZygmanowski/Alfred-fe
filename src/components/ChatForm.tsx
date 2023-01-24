import { Field, Form, Formik } from "formik";
import { askAlfred } from "../features/askAlfred";

interface messageT {
  message: string;
}

export const ChatForm = () => {
  const initialValues: messageT = { message: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const val = JSON.stringify(values, null, 2);
        setTimeout(() => {
          askAlfred(val);
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
