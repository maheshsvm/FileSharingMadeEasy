import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import DownloadLinkComponent from "./components/DownloadLinkComponent";
import { Hourglass } from "react-loader-spinner";

function App() {
  const [file, setFile] = useState(undefined);
  const [downloadLink, setDownloadLink] = useState("");
  const [loading, setLoading] = useState(false);
  

  const getDownloadLink = async () => {
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file, file.name);

    const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

    try {
      setLoading(true);

      const response = await axios.post(
        `${serverUrl}/api/v1/upload`,
        data
      );
      setDownloadLink(response.data.downloadLink);

      setLoading(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="app h-screen w-screen flex flex-col md:flex-row gap-7 justify-center items-center bg-[#111827] text-white">
        <Home getDownloadLink={getDownloadLink} file={file} setFile={setFile} />

        {/* loader  */}
        { (
          loading &&  <div className="w-52 flex justify-center">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#306cce", "#72a1ed"]}
            />
          </div>
        )}

        {/* <ShareButtons downloadLink={downloadLink}/> */}
        {downloadLink && !loading && <DownloadLinkComponent downloadLink={downloadLink} />}
      </div>
    </>
  );
}

export default App;
