// ThemeContext.js
import { createContext, useContext, useState,useEffect } from 'react';
import PageLoader from '../components/site/PageLoader';
import { setUserSession,getUserSession } from '../services/sessionService';

const SiteContext = createContext();

export const useSiteContext = () => {
    return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMsg, setLoadingMsg] = useState(false);
    const [user, setUserData] = useState(null);  
    const setLoading=(status,msg="")=>{
        setIsLoading(status);
        setLoadingMsg(msg)
    }  
    const setUser=(data)=>{
        setUserData(data);
        setUserSession(data);
    }

    const updateUserOnLoad=()=>{
       let session_data = getUserSession();
       if(session_data){
        setUserData(session_data);
       }
    }

    useEffect(() => {
        // this is to get the data from session storage 
       updateUserOnLoad()
    },[]);

    return (
        <SiteContext.Provider value={{ setLoading,user,setUser}}>
            {children}
            <PageLoader  loading={isLoading} msg={loadingMsg} />
        </SiteContext.Provider>
    );
};