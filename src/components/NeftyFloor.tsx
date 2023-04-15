import { FC } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";


export const NeftyFloor: FC = () => {

    const [neftyData, updateNeftyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [floorFilter, setFloorFilter] = useState('')
    var [index, setIndex] = useState(0);
    var [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const initRequest = () => {
          setIsLoading(true);
          axios({
            method: "get",
            url: "/api/floorNeftyAPI",
            params: {
              filter: floorFilter
            }
          }).then(function (response) {
            const data = response.data.data;
            setIsLoading(false);
            updateNeftyData(data);
          });
        };
        initRequest();
      }, [floorFilter]); 
    
    
      // Handler for the option select
      const filterChangeHandler = (e) => {
        setFloorFilter(e.target.value)
      };


    return (
        <div className="card card-compact card-bordered	max-w-md bg-neutral text-neutral-content bg-base-100 shadow-xl  my-2" style={{maxHeight: 275, }}>
        <div className="card-body">
          <h2 className="card-title">FLOOR</h2>
          {neftyData.length > 0 && <div className="flexbox-horizontal-container">
            <p>{neftyData[selectedIndex].name} | {neftyData[selectedIndex].price} AURY | {neftyData[selectedIndex].average}% </p>
            <select className="select select-primary select-xs ml-4" onChange={(e) => filterChangeHandler(e)}>
              <option value="">All</option>
              <option value="Bitebit">Bitebit</option>
              <option value="Dipking">Dipking</option>
              <option value="Dinobit">Dinobit</option>
              <option value="shiba">Shiba Ignite</option>
              <option value="Zzoo">Zzoo</option>
              <option value="BlockChoy">BlockChoy</option>
              <option value="number+9">Number 9</option>
              <option value="Axobubble">Axobubble</option>
            </select>
          </div>}
          <div>
              <div className="h-2"></div>
            </div>
          <div className="w-500 flexbox-horizontal-container">
            <div>
              <p>Hp</p>
              <p>Atk</p>
              <p>Def</p>
              <p>E-Atk</p>
              <p>E-Def</p>
              <p>Ini</p>
              <div className="h-6"></div>
              {neftyData.length > 0 &&
                <button className="btn btn-xs" onClick={(e) => {
                    window.open(`https://app.aurory.io/marketplace/mint/${neftyData[selectedIndex].mint}`, "_blank");
                }} >View</button>
              }
            </div>
            <div>
              <div className="w-2"></div>
            </div>
            <div>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].hp) : "0"}</p>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].atk) : "0"}</p>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].def) : "0"}</p>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].eatk) : "0"}</p>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].edef) : "0"}</p>
              <p>{neftyData.length > 0 ? Math.round(neftyData[selectedIndex].initiative) : "0"}</p>
            </div>
            <div>
              <div className="w-2"></div>
            </div>
            <div>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].hpPct : "0"} max="100"></progress></p>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].atkPct : "0"} max="100"></progress></p>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].defPct : "0"} max="100"></progress></p>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].eatkPct : "0"} max="100"></progress></p>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].edefPct : "0"} max="100"></progress></p>
              <p><progress className="progress progress-success h-1 w-20" value={neftyData.length > 0 ? neftyData[selectedIndex].initiativePct : "0"} max="100"></progress></p>
            </div>
            <div>
              <div className="w-2"></div>
            </div>
            {neftyData.length > 0 && <div>
              <p><button className="btn btn-xs" onClick={() => setSelectedIndex(selectedIndex = index + 0)} >{neftyData[index + 0].name} • {neftyData[index + 0].price} A</button></p>
              <div className="h-1"></div>
              <p><button className="btn btn-xs" onClick={() => setSelectedIndex(selectedIndex = index + 1)} >{neftyData[index + 1].name} • {neftyData[index + 1].price} A</button></p>
              <div className="h-1"></div>
              <p><button className="btn btn-xs" onClick={() => setSelectedIndex(selectedIndex = index + 2)} >{neftyData[index + 2].name} • {neftyData[index + 2].price} A</button></p>
              <div className="h-1"></div>
              <p><button className="btn btn-xs" onClick={() => setSelectedIndex(selectedIndex = index + 3)} >{neftyData[index + 3].name} • {neftyData[index + 3].price} A</button></p>
              <div className="h-1"></div>
              <p><button className="btn btn-xs" onClick={() => setSelectedIndex(selectedIndex = index + 4)} >{neftyData[index + 4].name} • {neftyData[index + 4].price} A</button></p>
              <div className="h-3"></div>
              <div className="w-500 flexbox-horizontal-container">
                <div className="w-8"></div>
                {index < 5 ? 
                  <button className="btn btn-circle btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path  strokeWidth="1.5" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z" /></svg>
                  </button>
                  : 
                  <button className="btn btn-circle btn-xs" onClick={() => setIndex(index = index - 5)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"><path  strokeWidth="1.5" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z" /></svg>
                  </button>
                }
                <div className="w-4"></div>

                {index > (neftyData.length - 6) ?
                  <button className="btn btn-circle btn-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0" fill="currentColor" viewBox="0 0 18 24" stroke="currentColor"><path strokeWidth="1.5" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" /></svg>
                  </button>
                  : 
                  <button className="btn btn-circle btn-xs"onClick={() => setIndex(index = index + 5)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 18 24" stroke="currentColor"><path strokeWidth="1.5" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" /></svg>
                  </button>      
                }
              </div>
              
            </div>}
          </div>
        </div>
      </div>

    );
};
