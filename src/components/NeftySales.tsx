import { FC } from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

export const NeftySales: FC = () => {

    const [neftyData, updateNeftyData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [floorFilter, setFloorFilter] = useState('')
    var [index, setIndex] = useState(0);

    useEffect(() => {
        const initRequest = () => {
          // setIsLoading(true);
          axios({
            method: "get",
            url: "/api/neftySalesAPI",
          }).then(function (response) {
            const data = response.data.data;
            //setIsLoading(false);
            updateNeftyData(data);
          });
        };
        initRequest();
      }, []);
    

    return (
        <div className="card card-compact card-bordered max-w-md bg-neutral text-neutral-content bg-base-100  my-2" style={{maxHeight: 275, minWidth: 200}}>
        <div className="card-body" >
          <h2 className="card-title" >SALES</h2>
          {neftyData && neftyData.length > 0 && neftyData &&
            <div flexbox-horizontal-container>
                <div className="name">[{neftyData[index + 0].average}%] {neftyData[index + 0].name}: {neftyData[index + 0].price} A</div>
                  <ReactTimeAgo date={neftyData[index + 0].time} locale="en-US"/>
                <div className="h-1.5"></div>
                <div className="name">[{neftyData[index + 1].average}%] {neftyData[index + 1].name}: {neftyData[index + 1].price} A</div>
                  <ReactTimeAgo date={neftyData[index + 1].time} locale="en-US"/>
                <div className="h-1.5"></div>
                <div className="name">[{neftyData[index + 2].average}%] {neftyData[index + 2].name}: {neftyData[index + 2].price} A</div>
                  <ReactTimeAgo date={neftyData[index + 2].time} locale="en-US"/>
                <div className="h-1.5"></div>
                <div className="name">[{neftyData[index + 3].average}%] {neftyData[index + 3].name}: {neftyData[index + 3].price} A</div>
                  <ReactTimeAgo date={neftyData[index + 3].time} locale="en-US"/>
                <div className="h-1.5"></div>

                <div className="w-500 flexbox-horizontal-container">
                <div className="w-0"></div>
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
            </div>
                
            // .map((nefty) => {
            //   return (
            //     <div key={nefty.mint} flexbox-horizontal-container /**style={{backgroundColor: 'purple', overflowY: 'scroll', background: '#aaa'}}**/>
            //       <div className="name">[{nefty.average}%] {nefty.name}: {nefty.price} A</div>
            //       <ReactTimeAgo date={nefty.time} locale="en-US"/>
            //       <div className="h-1.5"></div>
            //     </div>
            //   );
            // })

          }
        </div>
        </div>

    );
};
