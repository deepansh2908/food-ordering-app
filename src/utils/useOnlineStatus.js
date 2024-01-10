//custom hook to check online status of user-> returns a boolean value
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    //we want to call this callback once
    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        });

        window.addEventListener('offline', () => {
            setOnlineStatus(false);
        });
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;