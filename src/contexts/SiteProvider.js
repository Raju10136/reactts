// ThemeContext.js
import { createContext, useContext, useState } from 'react';
import PageLoader from '../components/site/PageLoader';

const SiteContext = createContext();

export const useSiteContext = () => {
    return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMsg, setLoadingMsg] = useState(false);  
    const setLoading=(status,msg="")=>{
        setIsLoading(status);
        setLoadingMsg(msg)
    }  

    return (
        <SiteContext.Provider value={{ setLoadingMsg,setLoading }}>
            {children}
            <PageLoader  loading={isLoading} msg={loadingMsg} />
        </SiteContext.Provider>
    );
};