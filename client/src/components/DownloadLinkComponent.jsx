import React, { useState } from "react";

const DownloadLinkComponent = ({ downloadLink }) => {
  
  const copyToClipboard = async()=>{
    await navigator.clipboard.writeText(downloadLink)
  }
  return (
    <div className="bg-[#1E293B] text-white p-4 rounded-md flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center">Get Your File !!</h1>
      <div className="flex gap-3 my-4 justify-center items-center">
        <span className=""><a href={`${downloadLink}`}>{downloadLink}</a></span>
        <i title="copy link" onClick={copyToClipboard} className="fa-regular fa-copy cursor-pointer hover:text-blue-500 hover:scale-110 transition-all hover:transition-all"></i>
      </div>
      
    </div>
  );
};

export default DownloadLinkComponent;
