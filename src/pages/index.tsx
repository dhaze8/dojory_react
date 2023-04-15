import type { NextPage } from "next";
import { NeftyFloor } from "components/NeftyFloor";
import { NeftySales } from "components/NeftySales";
import Head from "next/head";
import { HomeView } from "../views";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import Image from 'next/image'
import keyImage from '../../public/assets/key.png'
import eggImage from '../../public/assets/egg.png'
import evergladeEggImage from '../../public/assets/evergladeEgg.png'
import auroryImage from '../../public/assets/aury.png'
import aurorybImage from '../../public/assets/aury-b.png'



import en from 'javascript-time-ago/locale/en.json'


TimeAgo.addDefaultLocale(en)

const Home: NextPage = (props) => {
  
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  const [neftyData, updateNeftyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [floorFilter, setFloorFilter] = useState('')
  var [index, setIndex] = useState(0);

  // useeffect hook fires the function when the component first renders
  useEffect(() => {


      const initRequest = () => {
        axios({
          method: "get",
          url: "/api/priceStatusAPI",
        }).then(function (response) {
          const data = response.data.data;
          //setIsLoading(false);
          updateNeftyData(data);
        });
      };

      // initRequest();
    }, []);
  


  return (
    <div>
      <div className="div-summary-price">
        <div className="card card-compact card-bordered max-w-md bg-neutral text-neutral-content bg-base-100  my-1" style={{maxHeight: 275}}>
        <div className="card-body" >
          <div className="flexbox-horizontal-container">
            <div className="flexbox-vertical-container">
            <div className="h-0"></div>
            <p>TODO</p>
              {fetchError && (<p>{fetchError}</p>)}
              {smoothies && (
                <div className="smoothies">
                  {smoothies.map(smoothies => (
                    <p>{smoothies.tx_id}</p>
                  ))}
                </div>
              )}
              <Image
                src={eggImage}
                width="15px"
                height="25px"
                />
              <div className="h-0"></div>
              {neftyData && neftyData.length > 0  &&
                <div className="flexbox-horizontal-container flex">
                  <p style={{fontSize:10}}>{neftyData[0].egg_genesis_price}</p>
                  {/* <Image  
                  src={auroryImage}
                  width="10px"                
                  height="10px"
                  /> */}
                </div> 
              }
            </div>
            <div className="w-8"></div>
            <div className="flexbox-vertical-container">
            <div className="h-0"></div>
              <Image
                src={eggImage}
                width="15px"
                height="25px"
              />
              {neftyData && neftyData.length > 0  && 
                <p style={{fontSize:10}}>{neftyData[0].egg_everglade_price}</p>
              }            </div>
            <div className="w-8"></div>
            <div className="flexbox-vertical-container">
            <div className="h-0"></div>
              <Image
                src={eggImage}
                width="15px"
                height="25px"
              />
              {neftyData && neftyData.length > 0  && 
                <p style={{fontSize:10}}>{neftyData[0].kitty_key_price}</p>
              }
              </div>          
          </div>
        </div>
      </div>

      </div>
      <div className="center" > 
        <div className="flexbox-horizontal-container" >
          <NeftyFloor/>
          <div className="w-6"></div>
          <NeftySales/>
          <div className="w-6"></div>
          <div className="card card-compact card-bordered max-w-md bg-neutral text-neutral-content bg-base-100  my-2" style={{maxHeight: 275}}>
          <div className="card-body" >
            <h2 className="card-title" >NEW LISTINGS</h2>
          </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
