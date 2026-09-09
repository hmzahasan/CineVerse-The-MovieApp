const Loading = () => {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
  
        <div className="text-center">
  
          {/* Logo */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Cine<span className="text-blue-500">Verse</span>
          </h1>
  
          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
  
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]"></span>
  
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
  
          <p className="mt-5 text-gray-400 tracking-[0.3em] text-xs">
            LOADING
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default Loading;