import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'

const Home = ({getDownloadLink , setFile , file}) => {
    const inputRef = useRef();

    useEffect(()=>{
        if(file){
          getDownloadLink();
        }
        
    }, [file])
    

  return (
    <div className="bg-[#1E293B] text-white p-4 rounded-md flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-center">Simple File Sharing</h1>
      <p className="text-center my-4">Upload your file and share that easily with a link or qr code</p>
      <button className=" text-center relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"  onClick={()=> inputRef.current.click()}>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Upload
        </span>
      </button>

      <input ref={inputRef} onChange={(e)=> setFile(()=> e.target.files[0])} className="hidden" type="file" name="" id="" />
    </div>
  );
};

export default Home;
