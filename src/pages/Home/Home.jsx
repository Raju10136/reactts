
import React, { useState, useEffect } from 'react';
import { useSiteContext } from '../../contexts/SiteProvider';
import Cards from './Card';

const Home=()=>{
    const {setLoading} = useSiteContext();
    useEffect(() => {
         setLoading(true,"Please wait until the results loaded")
        // Simulate asynchronous data loading
        const fetchData = async () => {
          await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay
          setLoading(false);
        };
    
        fetchData();
      }, []);

    return (
        <div>
           <Cards />
        </div>
    );
};

export default Home