import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { ShareSocial } from "react-share-social";

const DownloadLinkComponent = ({ downloadLink }) => {

  const style = {
    root: {
    //   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    backgroundColor :"#1E293B" ,
      borderRadius: 6,
      border: 0,
      color: "white",
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      padding : 0,
      minWidth : "0",
      maxWidth: "75vw"
    },
    copyContainer: {
      background: "rgb(0,0,0,0.7)",
      maxWidth : "90%"
    },
    title: {
      color: "aquamarine",
      fontStyle: "italic",
    },
  };


  // const copyToClipboard = async () => {
  //   await navigator.clipboard.writeText(downloadLink);
  // };
  
  return (
    <div className="bg-[#1E293B] text-white w-fit rounded-md gap-3 py-3 flex flex-col justify-center items-center">
      {/* <h1 className="font-bold text-2xl text-center">Get Your File !!</h1>
      <div className="flex gap-3 my-4 justify-center items-center">
        <span className="">
          <a href={`${downloadLink}`}>{downloadLink}</a>
        </span>
        <i
          title="copy link"
          onClick={copyToClipboard}
          className="fa-regular fa-copy cursor-pointer hover:text-blue-500 hover:scale-110 transition-all hover:transition-all"
        ></i>
      </div> */}

      <ShareSocial
        url={downloadLink}
        socialTypes={["whatsapp", "telegram", "twitter", "reddit", "linkedin"]}
        style={style}
      ></ShareSocial>

      <QRCodeSVG value={downloadLink} includeMargin={true} fgColor="#02A6F1" />
    </div>
  );
};

export default DownloadLinkComponent;
