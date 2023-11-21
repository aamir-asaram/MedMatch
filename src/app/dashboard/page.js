const Dash = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h2 className="mb-4 text-3xl">Let's start simple. What's <span className="text-red-400">your name?</span></h2>
      <input type="text" placeholder="Enter your name" className="input w-1/5 h-9 px-4 py-2 border-2 border-black active:border-red-400" />
    </div>
  );
}

// TODO: Figure out how to make routes locked behind authentication

export default Dash;