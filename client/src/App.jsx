import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import DownloadLinkComponent from "./components/DownloadLinkComponent";

function App() {
  const [file, setFile] = useState(undefined);
  const [downloadLink, setDownloadLink] = useState("");
  

  const getDownloadLink = async () => {
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file, file.name);
    try {

      const response = await axios.post(
        "http://localhost:5000/api/v1/upload",
        data
      );
      setDownloadLink(response.data.downloadLink)
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="app h-screen w-screen flex gap-7 justify-center items-center bg-[#111827] text-white">
        <Home getDownloadLink={getDownloadLink} file={file} setFile={setFile} />
        {downloadLink && <DownloadLinkComponent downloadLink={downloadLink}/>}
        {/* <DownloadLinkComponent downloadLink={downloadLink}/> */}
      </div>
    </>
  );
}

export default App;
