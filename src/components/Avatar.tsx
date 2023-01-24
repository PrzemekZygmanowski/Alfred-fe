import butler from "../assets/butler.png";

export const Avatar = () => {
  return (
    <div className='flex items-center w-40 my-8'>
      <img
        className='border-brown border-2 rounded-full ring-2 ring-brown ring-offset-darkGreen ring-offset-4'
        src={butler}
        alt=''
      />
    </div>
  );
};
