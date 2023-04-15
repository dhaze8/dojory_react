import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [neftyData, updateNeftyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const initRequest = () => {
      setIsLoading(true);
      axios({
        method: "get",
        url: "/api/sniperAPI",
      }).then(function (response) {
        const data = response.data.data;
        setIsLoading(false);
        updateNeftyData(data);
      });
    };
    initRequest();
  }, []);

  
  return (
    <div >
        <div>
          {isLoading && "Data is loading.. Please wait"}
        </div>
        <div>
          <div>
            <div className="flexbox-horizontal-container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
              {neftyData &&
                neftyData.length > 0 &&
                neftyData
                  .sort((item) => item.class)
                  .map((nefty) => {
                    return (
                      <div className="card card-compact card-bordered bg-neutral text-neutral-content bg-base-100 my-2 mx-2" style={{minHeight: 150, minWidth: 150}}>
                      <div className="card-body" >
                        <div className="badge badge-secondary">{nefty.class}</div>
                        <div className="name">[{nefty.name}%]</div>
                      </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
  
    </div>
  );
}
