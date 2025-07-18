// This is a custom hook that checks if the user is online or offline.
import { useState } from 'react';

const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus]= useState(true);

    useState(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    },[]);

    return onlineStatus;

};
 export default useOnlineStatus
