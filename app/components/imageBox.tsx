"use client";

import axios from "axios";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  urls: any;
  user: any;
  alt_description: ReactNode;
  sponsorship: any;
  likes: ReactNode;
  id: any;
  key: any;
  src: string;
  alt: string;
  thumb: string;
};

const ImageBox = () => {
  const [images, setImages]: [images: any, setImages: any] = useState([]);

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ID;
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then((res) => {
        setImages([...images, ...res.data]);
        console.log([...images, ...res.data]);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <>
      {!images ? (
        <h2 className="flex items-center justify-center h-screen text-4xl lg:text-5xl text-center text-slate-800">
          <AiOutlineLoading3Quarters className="animate-spin" />
        </h2>
      ) : (
        <div className="lg:pt-24 pb-5 px-4 space-y-5">
          <h1 className="text-center text-5xl capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-800 to-violet-800">
            random photo gallery
          </h1>
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={
              <h2 className="flex items-center justify-center h-screen text-4xl lg:text-5xl text-center text-slate-800">
                <AiOutlineLoading3Quarters className="animate-spin" />
              </h2>
            }
            style={{ overflow: "hidden" }}
          >
            <div className="w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {images.map((img: Props) => {
                return (
                  <div
                    className="relative bg-gradient-to-t from-fuchsia-500/50 border-4 rounded-xl flex flex-col justify-between"
                    key={img.id}
                  >
                    <Image
                      src={img.urls.full}
                      alt={img.user.name}
                      priority
                      width={500}
                      height={500}
                      className="rounded-t-xl hover:opacity-75 transition-all duration-500 ease-in-out w-full h-48 p-2"
                    />
                    <div className="text-center p-2">
                      <p>{img.alt_description}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center p-2">
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-center">By: {img.user.name}</p>
                      </div>
                      <div className="flex flex-row items-center space-x-2">
                        <p className="text-center">{img.likes}</p>
                        <FcLike />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default ImageBox;
