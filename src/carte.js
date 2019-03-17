import React from 'react';
import puce from './puce.png';
import master from './master.png'
import './carte.css'
const Card=({news, news2, news3})=>{
    
        return (
            <div className='carte'>
              <div className="Title">
                    <h1>Company Name</h1>
                </div>
                <img src={puce} className="puce" alt="logo" />
                <div className="rip">
                    <h3>{news}</h3>
                </div>

                <div className="flex">
                                       
                    <h3>{news2}</h3>
                    <h2>{news3}</h2>
                    <img src={master} className="master" alt="logo" />
                    
                </div>

            </div> 

         );
    }

 
export default Card;