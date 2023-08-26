const Download = () => {
  return (
    <div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center">
      <div className="w-[600px] h-[500px] card-box bg-black/70 border border-opacity-40">
        <h2 className="text-xl text-white font-bold text-center py-8">
          Youtube Video Downloader
        </h2>
        <div className=" w-full mx-auto px-5 ">
          <input
            className="px-6 py-4 border w-full bg-black border-opacity-50 text-gray-200 outline-none "
            type="text"
            placeholder="Enter Your link"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
