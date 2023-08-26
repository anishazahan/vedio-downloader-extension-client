import React, { useState } from "react";
import axios from "axios";
import NextTopLoader from "nextjs-toploader";
import Loader from "@/components/home/Loader";
import Image from "next/image";

interface VideoInfo {
  title: string;
  thumbnailUrl: string;
  videoResulation: string[];
  // Add other properties as needed
}

const Download = () => {
  const [link, setLink] = useState("");
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
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
      console.log(videoInfo?.thumbnailUrl);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const video_download = () => {
    const videoId = link.split("https://youtu.be/")[1];
    const url = `http://localhost:5000/video-download?id=${videoId}&resu=${resulation}`;
    window.location.href = url;
  };

  return (
    <div className="bg-gray-800 w-full h-[100vh] flex justify-center items-center">
      <div className="w-[700px] h-[500px] card-box bg-black/70 border border-opacity-40">
        <h2 className="text-xl text-white font-bold text-center py-8">
          Youtube Video Downloader
        </h2>
        <form onSubmit={get_video_details}>
          <div className="w-full mx-auto px-8 flex items-center">
            <input
              onChange={(e) => setLink(e.target.value)}
              className="px-6 py-4 border border-r-0 w-full bg-black border-opacity-50 text-gray-200 outline-none"
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

        <div>
          {loader ? (
            <Loader />
          ) : (
            videoInfo && (
              <div className="flex gap-5 px-4 pt-10 items-center">
                <div className=" w-full lg:w-[50%]">
                  <Image
                    width="300"
                    height="300"
                    className=" rounded-md "
                    src={videoInfo?.thumbnailUrl}
                    alt=""
                  />
                </div>

                <div className="text-white flex gap-2 flex-col w-full lg:w-[50%]">
                  <h3 className="font-semibold text-xl">
                    {videoInfo?.title.slice(0, 70)}...
                  </h3>
                  <span>Time : 33.43</span>
                  <div className="flex gap-3 mt-4">
                    <select
                      onChange={(e) => setResulation(e.target.value)}
                      className="px-3 py-2 outline-none bg-slate-800 border border-purple-500 pr-3 rounded"
                    >
                      {videoInfo?.videoResulation.length > 0 &&
                        videoInfo?.videoResulation.map((v, i) => (
                          <option key={i} value={v}>
                            {v}p
                          </option>
                        ))}
                    </select>
                    <button
                      onClick={video_download}
                      className="px-3 py-2 bg-purple-600 text-white rounded"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Download;
