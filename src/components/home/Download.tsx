import axios from "axios";
import { useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Image from "next/image";

const Download = () => {
  const [link, setLink] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const [resulation, setResulation] = useState("");
  const [loader, setLoader] = useState(false);

  const get_video_details = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const videoId = link.split("https://youtu.be/")[1];
    console.log(videoId);
    try {
      setLoader(true);
      const { data } = await axios.get(
        `http://localhost:5000/api/get-video-info/${videoId}`
      );
      console.log(data);
      setLoader(false);
      setVideoInfo(data.videoInfo);
      setResulation(data.videoInfo.lastResu);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center">
      {/* .........  form ....... */}

      <div className="w-[600px] h-[500px] card-box bg-black/70 border border-opacity-40">
        <h2 className="text-xl text-white font-bold text-center py-8">
          Youtube Video Downloader
        </h2>
        <form onSubmit={get_video_details}>
          <div className=" w-full mx-auto px-8 flex items-center ">
            <input
              onChange={(e) => setLink(e.target.value)}
              className="px-6 py-4 border border-r-0 w-full bg-black border-opacity-50 text-gray-200 outline-none "
              type="text"
              placeholder="Input Your Video link Here"
              required
            />
            <input
              className="px-6 cursor-pointer text-sm py-5 text-white font-semibold bg-purple-800"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>

      {/* .........  download ....... */}

      <div>
        {loader ? (
          <div className="w-full py-5 text-center">
            <NextTopLoader color="#fff" />
          </div>
        ) : (
          "hellow"
        )}
      </div>
    </div>
  );
};

export default Download;
