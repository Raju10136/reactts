// ThemeContext.js
import { createContext, useContext, useState, useEffect,useCallback } from 'react';
import PageLoader from '../components/site/PageLoader';
import { setUserSession, getUserSession } from '../services/sessionService';
import SmartModal from './SmartModal';

const SiteContext = createContext();

export const useSiteContext = () => {
    return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMsg, setLoadingMsg] = useState(false);
    const [user, setUserData] = useState(null);
    // these are modal contexts 
    const [modalOptions, setModalOptions] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 
    const setLoading = (status, msg = "") => {
        setIsLoading(status);
        setLoadingMsg(msg)
    }
    const setUser = (data) => {
        setUserData(data);
        setUserSession(data);
    }

    const openModal = useCallback((options) => {
        setModalOptions(options);
        setIsModalOpen(true);
      }, []);
    
    const closeModal = useCallback(() => {
        setModalOptions(null);
        setIsModalOpen(false);
      }, []);

    const updateUserOnLoad = () => {
        let session_data = getUserSession();
        if (session_data) {
            setUserData(session_data);
        }
    }

    useEffect(() => {
        // this is to get the data from session storage 
        updateUserOnLoad()
    }, []);

    return (
        <SiteContext.Provider value={{ setLoading, user, setUser,openModal, closeModal  }}>
            {children}
            <PageLoader loading={isLoading} msg={loadingMsg} />
            {isModalOpen && <SmartModal modalOptions={modalOptions} closeModal={closeModal} />}
        </SiteContext.Provider>
    );
};