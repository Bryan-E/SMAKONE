import React from "react";
import { useState, useRef } from "react";
import { forwardRef } from "react";

import HTMLFlipBook from "react-pageflip";

import Logo_SMAK1 from "../../Image/Logo_SMAK1.webp"; 

import useWindowDimensions from "./GetWindowDimensions";

const BlossomLuminance = () => {
  const [buttonText, setButtonText] = useState("Page 0");
  function onFlip(data) {
    console.log("Current page: " + data);
    setButtonText("Page " + data);
  }

  var flipBookRef = useRef(null);

  const images = require.context("./BlossomLuminance", true);
  const imageList = images.keys().map((image) => images(image));
  var { height, width } = useWindowDimensions();
  if (width < height) {
    height = (width * 3510) / 2479;
  } else {
    height *= 9 / 10;
    //width = width / 2 - 50;
    width = (height * 2479) / 3510;
  }

  return (
    <div className="">
      {/* <Nav /> */}

      <div className="overflow-hidden flex flex-col mx-auto h-screen w-screen">
        <div className="h-3"></div>
        <div className="Circle"></div>
        <HTMLFlipBook
          ref={flipBookRef}
          className="mx-auto"
          //   height={1755 / 3}
          height={height}
          //   width={1240 / 3}
          width={width}
          size="stretch"
          minHeight={height / 2}
          maxHeight={height}
          minWidth={width / 2}
          maxWidth={width} //this used to not work but now it does and i have no idea why
          showCover={true}
          autoSize={true}
          flippingTime={700}
          onFlip={(e) => onFlip(e.data)}
        >
          {imageList.map((image, index) => (
            <div className="page">
              <img className="w-full h-full" key={index} src={image} alt={index} />
            </div>
          ))}
        </HTMLFlipBook>
        <div className="flex flex-grow">
          <div className="flex-none flex justify-center items-center">
          <a href="/">
            <img className="ml-4 object-scale-down h-3 md:h-4 lg:h-5" src={Logo_SMAK1} alt="logo"></img>
          </a>
          </div>

          <div className="flex-auto"></div>

          <div className="flex items-center mr-4">
            <button className="flex-auto text-2xl" onClick={() => flipBookRef.current.pageFlip().flipPrev()}>
              ←
            </button>
            <p className="flex-auto text-center mx-8">{buttonText}</p>
            <button className="flex-auto text-2xl" onClick={() => flipBookRef.current.pageFlip().flipNext()}>
              →
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto bg-gray-400 w-screen h-screen">
        <img className="h-screen" src={a}></img>
      </div> */}
    </div>
  );
};
export default BlossomLuminance;
