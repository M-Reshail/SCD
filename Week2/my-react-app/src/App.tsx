function App() {
  return (
    <div className="bg-red-600 m-0 p-0 flex justify-center min-h-screen">
      <div className="w-3/4 text-center">
        <img src="/vite.svg" alt="Banner" className="block mx-auto w-full max-w-4xl h-[200px] object-cover" />
        <div className="flex bg-violet-700 w-full max-w-4xl p-2.5 mx-auto">
          <a href="#" className="flex-1 text-white no-underline block leading-10">Home</a>
          <a href="#" className="flex-1 text-white no-underline block leading-10">About Us</a>
          <a href="#" className="flex-1 text-white no-underline block leading-10">Products</a>
          <a href="#" className="flex-1 text-white no-underline block leading-10">Contact Us</a>
        </div>
        <div className="mx-auto flex justify-center w-full max-w-4xl">
          <div className="bg-green-600 w-[30%] h-32 text-left text-white">Left</div>
          <div className="bg-orange-500 w-[70%] h-32 text-left text-white">Right</div>
        </div>
        <div className="mx-auto flex justify-center w-full max-w-4xl">
          <div className="bg-blue-700 w-full h-24 text-left text-white">bottom</div>
        </div>
      </div>
    </div>
  );
}

export default App;
